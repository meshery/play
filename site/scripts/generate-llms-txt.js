const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const siteRoot = path.join(__dirname, "..");
const sourceRoot = path.join(siteRoot, "src");
const publicRoot = path.join(siteRoot, "public");

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const staticAssetsPlugin = {
  name: "static-assets",
  setup(build) {
    build.onResolve(
      { filter: /\.(css|svg|png|jpe?g|gif|webp)$/ },
      (args) => {
        if (args.kind === "entry-point") return null;

        const resolved =
          args.path.startsWith(".") || path.isAbsolute(args.path)
            ? path.resolve(args.resolveDir, args.path)
            : require.resolve(args.path, { paths: [args.resolveDir] });

        return { path: resolved, namespace: "file" };
      }
    );

    build.onLoad({ filter: /\.svg$/ }, (args) => ({
      contents: `
        export default ${JSON.stringify(args.path)};
        export const ReactComponent = () => null;
      `,
      loader: "js",
    }));

    build.onLoad({ filter: /\.(png|jpe?g|gif|webp)$/ }, (args) => ({
      contents: `export default ${JSON.stringify(args.path)};`,
      loader: "js",
    }));

    build.onLoad({ filter: /\.css$/ }, () => ({
      contents: "export default {};",
      loader: "js",
    }));
  },
};

// Bundle the React components into a plain CommonJS file and load it.
// The output must live inside the project so that the externalized
// packages (react, styled-components, ...) resolve from node_modules.
async function loadComponents() {
  const cacheRoot = path.join(siteRoot, "node_modules", ".cache");
  fs.mkdirSync(cacheRoot, { recursive: true });

  const outDir = fs.mkdtempSync(path.join(cacheRoot, "llms-ssr-"));
  const outfile = path.join(outDir, "components.cjs");

  await esbuild.build({
    stdin: {
      contents: `
        export { default as App } from "./App.js";
        export { default as Faq } from "./components/Faq/index.js";
      `,
      resolveDir: sourceRoot,
      sourcefile: "llms-entry.js",
      loader: "jsx",
    },
    bundle: true,
    platform: "node",
    format: "cjs",
    outfile,
    // Single shared React instance with this script (avoids invalid hook calls).
    packages: "external",
    jsx: "automatic",
    loader: { ".js": "jsx" }, // CRA-style JSX inside .js files
    define: { "process.env.NODE_ENV": '"production"' },
    plugins: [staticAssetsPlugin],
    logLevel: "silent",
  });

  const components = require(outfile);

  return {
    components,
    cleanup: () => fs.rmSync(outDir, { recursive: true, force: true }),
  };
}

async function htmlToMarkdown(html, { mainOnly = false } = {}) {
  const [{ unified }, rehypeParse, rehypeRemark, remarkStringify] =
    await Promise.all([
      import("unified"),
      import("rehype-parse"),
      import("rehype-remark"),
      import("remark-stringify"),
    ]);

  const stripImageElements = () => (tree) => {
    const hasTextContent = (node) =>
      (node.type === "text" && node.value.trim().length > 0) ||
      node.children?.some(hasTextContent);

    const visit = (node) => {
      if (!node.children) {
        return;
      }

      node.children = node.children.flatMap((child) => {
        // Images are not useful in the LLM representation.
        if (child.tagName === "img") {
          return [];
        }

        visit(child);

        // Remove links and list items that contain no meaningful text.
        if (["a", "li"].includes(child.tagName) && !hasTextContent(child)) {
          return [];
        }

        return [child];
      });
    };

    visit(tree);
  };

  const extractMainContent = () => (tree) => {
    const findMain = (node) => {
      if (node.tagName === "main") {
        return node;
      }

      for (const child of node.children || []) {
        const main = findMain(child);
        if (main) {
          return main;
        }
      }

      return null;
    };

    const main = findMain(tree);
    if (!main) {
      throw new Error("Rendered React app did not contain a <main> element.");
    }

    tree.children = main.children;
  };

  const processor = unified()
    .use(rehypeParse.default, { fragment: true });

  if (mainOnly) {
    processor.use(extractMainContent);
  }

  const result = processor
    .use(stripImageElements)
    .use(rehypeRemark.default)
    .use(remarkStringify.default)
    .processSync(html);

  return String(result).trim();
}

async function generateLlmsFiles() {
  const { components, cleanup } = await loadComponents();

  try {
    const { App, Faq } = components;

    const appHtml = renderToStaticMarkup(React.createElement(App));
    const faqHtml = renderToStaticMarkup(
      React.createElement(Faq, {
        category: ["Cloud Native Playgrounds", "Meshery Playground"],
      })
    );

    const [pageMarkdown, faqMarkdown] = await Promise.all([
      htmlToMarkdown(appHtml, { mainOnly: true }),
      htmlToMarkdown(faqHtml),
    ]);
    const markdown = `${pageMarkdown}\n\n${faqMarkdown}`;

    fs.writeFileSync(path.join(publicRoot, "llms.txt"), markdown, "utf8");

    console.log("Generated llms.txt from the rendered React content.");
  } finally {
    cleanup();
  }
}

generateLlmsFiles().catch((error) => {
  console.error("Failed to generate llms.txt files:", error);
  process.exitCode = 1;
});
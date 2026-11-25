// Generates build/404.html from build/index.html after `react-scripts build`.
//
// GitHub Pages serves the site root's 404.html (with a 404 status) for any
// path that doesn't exist. The app reads window.__PLAY_404__ to render the
// Not Found page instead of the homepage.
//
// Because package.json sets "homepage": ".", every URL the build emits is
// relative to the page: ./static/... in index.html, and images imported in
// JS, which webpack resolves against "./" too. A 404 page can be served at
// any depth (e.g. /a/b/c), so 404.html gets a <base> pointing at the site
// root, NOT_FOUND_BASE, which defaults to "/" (play.meshery.io).
// PR previews live in a subfolder and set NOT_FOUND_BASE=./ to leave URLs
// relative, so the page is viewable at <preview-url>/404.html.
const fs = require("fs");
const path = require("path");

// "./", or an absolute path made only of plain segments: "/", "/a/", "/a/b/".
const isValidBase = (base) =>
  base === "./" || /^\/([A-Za-z0-9._~%-]+\/)*$/.test(base);

// Returns the 404.html document for the given index.html and base. Throws if
// the base is invalid or index.html lacks the <head> or <title> it rewrites,
// so a template change fails the build instead of shipping a 404.html that
// silently renders the homepage.
const createNotFoundHtml = (indexHtml, base) => {
  if (!isValidBase(base)) {
    throw new Error(
      `NOT_FOUND_BASE must be "./" or an absolute path of plain segments ending in "/", got "${base}"`
    );
  }
  if (!/<head>/.test(indexHtml)) {
    throw new Error("index.html has no bare <head> tag; cannot inject the 404 flag");
  }
  if (!/<title>[\s\S]*?<\/title>/.test(indexHtml)) {
    throw new Error("index.html has no <title> tag; cannot set the 404 page title");
  }

  // <base> must precede every relative URL, and the flag must be set before
  // the app bundle runs, so both go first in <head>.
  const head =
    (base === "./" ? "" : `<base href="${base}"/>`) +
    `<script>window.__PLAY_404__=${JSON.stringify({ home: base })}</script>`;

  return indexHtml
    .replace(
      /<title>[\s\S]*?<\/title>/,
      "<title>Page Not Found | Meshery Playground</title>"
    )
    .replace(/<head>/, `<head>${head}`);
};

module.exports = { createNotFoundHtml, isValidBase };

if (require.main === module) {
  const buildDir = path.join(__dirname, "..", "build");
  const base = process.env.NOT_FOUND_BASE || "/";

  try {
    const indexHtml = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
    fs.writeFileSync(
      path.join(buildDir, "404.html"),
      createNotFoundHtml(indexHtml, base)
    );
  } catch (error) {
    console.error(`create-404: ${error.message}`);
    process.exit(1);
  }
  console.log(`Created build/404.html (base "${base}")`);
}

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

const buildDir = path.join(__dirname, "..", "build");
const base = process.env.NOT_FOUND_BASE || "/";

if (base !== "./" && !/^\/(.*\/)?$/.test(base)) {
  console.error(
    `NOT_FOUND_BASE must be "./" or an absolute path ending in "/", got "${base}"`
  );
  process.exit(1);
}

let html = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");

html = html.replace(
  /<title>[\s\S]*?<\/title>/,
  "<title>Page Not Found | Meshery Playground</title>"
);

// <base> must precede every relative URL, and the flag must be set before the
// app bundle runs, so both go first in <head>.
const head =
  (base === "./" ? "" : `<base href="${base}"/>`) +
  `<meta name="robots" content="noindex"/>` +
  `<script>window.__PLAY_404__=${JSON.stringify({ home: base })}</script>`;
html = html.replace(/<head>/, `<head>${head}`);

fs.writeFileSync(path.join(buildDir, "404.html"), html);
console.log(`Created build/404.html (base "${base}")`);

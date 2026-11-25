// Tests for scripts/create-404.js, which lives outside src/ because it runs
// after the build. Jest only looks for tests under src/, so the test is here.
const { createNotFoundHtml, isValidBase } = require("../scripts/create-404");

const INDEX_HTML =
  '<!doctype html><html lang="en"><head><meta charset="utf-8"/>' +
  '<link rel="icon" href="./favicon.ico"/><title>Meshery Playground</title>' +
  '<script defer="defer" src="./static/js/main.js"></script></head>' +
  '<body><div id="root"></div></body></html>';

describe("createNotFoundHtml", () => {
  it('with base "/", adds <base href="/"> and the flag first in <head>', () => {
    const html = createNotFoundHtml(INDEX_HTML, "/");
    expect(html).toContain(
      '<head><base href="/"/><script>window.__PLAY_404__={"home":"/"}</script>'
    );
    expect(html).toContain("<title>Page Not Found | Meshery Playground</title>");
    expect(html).not.toContain("<title>Meshery Playground</title>");
  });

  it('with base "./", keeps URLs relative and adds no <base>', () => {
    const html = createNotFoundHtml(INDEX_HTML, "./");
    expect(html).not.toContain("<base");
    expect(html).toContain(
      '<head><script>window.__PLAY_404__={"home":"./"}</script>'
    );
    expect(html).toContain('src="./static/js/main.js"');
  });

  it("fails when index.html has no bare <head> tag", () => {
    const html = INDEX_HTML.replace("<head>", '<head data-x="1">');
    expect(() => createNotFoundHtml(html, "/")).toThrow(/<head>/);
  });

  it("fails when index.html has no <title> tag", () => {
    const html = INDEX_HTML.replace("<title>Meshery Playground</title>", "");
    expect(() => createNotFoundHtml(html, "/")).toThrow(/<title>/);
  });

  it("fails on an invalid base", () => {
    expect(() => createNotFoundHtml(INDEX_HTML, "//example.com/")).toThrow(
      /NOT_FOUND_BASE/
    );
  });
});

describe("isValidBase", () => {
  it.each(["./", "/", "/play/", "/pr-preview/pr-333/", "/v1.2/", "/.well-known/"])("accepts %s", (base) => {
    expect(isValidBase(base)).toBe(true);
  });

  it.each([
    "",
    "/play",
    "play/",
    "//example.com/",
    '/a"b/',
    "/a<b/",
    "../",
    "/../",
    "/./",
    "/a/../",
    "/%/",
  ])(
    "rejects %s",
    (base) => {
      expect(isValidBase(base)).toBe(false);
    }
  );
});

import { isNotFoundPage } from "./isNotFoundPage";

describe("isNotFoundPage", () => {
  it("is true when 404.html set the flag, whatever the path or environment", () => {
    expect(
      isNotFoundPage({ flag: { home: "/" }, pathname: "/", env: "production" })
    ).toBe(true);
  });

  it("is true for a non-root path on the development server", () => {
    expect(
      isNotFoundPage({ flag: undefined, pathname: "/missing", env: "development" })
    ).toBe(true);
  });

  it("is false for the root on the development server", () => {
    expect(
      isNotFoundPage({ flag: undefined, pathname: "/", env: "development" })
    ).toBe(false);
    expect(
      isNotFoundPage({ flag: undefined, pathname: "/index.html", env: "development" })
    ).toBe(false);
  });

  it("is false in production without the flag, so the homepage renders", () => {
    expect(
      isNotFoundPage({ flag: undefined, pathname: "/missing", env: "production" })
    ).toBe(false);
  });
});

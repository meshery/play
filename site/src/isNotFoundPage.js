// GitHub Pages serves build/404.html for unknown routes, and that file sets
// window.__PLAY_404__ (see scripts/create-404.js). The dev server serves
// index.html for every path, so there any path but the root counts as unknown.
export const isNotFoundPage = ({
  flag = window.__PLAY_404__,
  pathname = window.location.pathname,
  env = process.env.NODE_ENV,
} = {}) => {
  if (flag) return true;
  if (env === "development") {
    return !["/", "/index.html"].includes(pathname);
  }
  return false;
};

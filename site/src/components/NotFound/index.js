import { NotFoundWrapper } from "./NotFound.styles";

// Where the "Back to Home" link points. The generated 404.html sets
// window.__PLAY_404__.home (see scripts/create-404.js); "/" is the fallback.
const getHomeUrl = () =>
  (typeof window !== "undefined" && window.__PLAY_404__?.home) || "/";

const NotFound = () => (
  <NotFoundWrapper>
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="code" aria-hidden="true">
        404
      </p>
      <h1 id="not-found-title">Page Not Found</h1>
      <p className="message">
        The page you are looking for doesn't exist or has been moved. Head back
        to the homepage to keep exploring the Cloud Native Playground.
      </p>
      <a className="home-btn" href={getHomeUrl()}>
        Back to Home
      </a>
    </section>
  </NotFoundWrapper>
);

export default NotFound;

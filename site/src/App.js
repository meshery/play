import { useState, useEffect } from "react";
import SignupForm from "./components/SignupForm";
import { Header, Main } from './App.style.js';
import mesheryLogo from './assets/images/meshery-learn-logo.png';
import mesheryPlayground from "./assets/images/meshery-playground-meshmap.png";
import Footer from "./components/Footer";

const App = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, []);

  return (
    <>
      <Header>
        <nav className={scroll ? "scrolled" : ""}>
          <img className="logo" src={mesheryLogo} alt="Meshery Logo" />
          <a href="#signup-form" className="signup-btn" role="button">Sign Up</a>
          <a href="https://playground.meshery.io" className="login-btn" role="button">Login</a>
        </nav>
      </Header>
      <Main>
        <section className="hero">
          <h3 className="try-now-txt">Try it now!</h3>
          <h1>
            The Cloud Native Playground
          </h1>
          <p className="desc-text">
            Explore the Cloud Native Computing Foundation's graduated, incubation, and sandbox projects as well as many other popular open source projects. Use Meshery Playground to explore a new way of DevOps - visual and collaborative configuration management for your infrastructure.
          </p>

          <figure>
            <img src={mesheryPlayground} alt="Meshery Playground" className="meshery-plaground" />
            <figcaption>Launch and learn with Meshery</figcaption>
          </figure>
          <p>The cloud native playground contains a set of learning paths that incorporate an application networking centric curriculum featuring training on 100+ integrations.</p>
        </section>
        <section className="form" id="signup-form">
          <h2>Sign up for the early access of cloud native playground!</h2>
          <SignupForm />
        </section>
        <section className="join-community">
          <div>
            <h1>Join the community!</h1>
            <p>Engage in the Meshery community by joining us on Slack</p>
            <a href="https://slack.layer5.io/" >Join Our Open Source Community</a>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default App;

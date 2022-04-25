import { useState, useEffect } from "react";
import SignupForm from "./components/SignupForm";
import { Header, Main } from './App.style.js';
import mesheryLogo from './assets/images/meshery-learn-logo.png';
import mesheryPlayground from "./assets/images/meshery-playground.png";
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
        </nav>
      </Header>
      <Main>
        <section className="hero">
          <h1>
            The Cloud Native Playground
          </h1>
          <h2>Coming soon...</h2>
          <p className="desc-text">
            The cloud native playground contains a set of learning paths with an application networking centric ciricullum featuring training on ten different service meshes.
          </p>
      
          <figure>
            <img src={mesheryPlayground} alt="Meshery Playground" className="meshery-plaground" />
            <figcaption>Launch and Learn with Meshery</figcaption>
          </figure>
        </section>
        <section className="form" id="signup-form">
          <h2>Sign up for the early access of cloud native playground!</h2>
          <SignupForm />
        </section>
        <section className="join-community">
          <div>
            <h1>Join the community!</h1>
            <p>Checkout the Layer5 community by joining us on Slack</p>
            <a href="http://slack.layer5.io/" >Join Our Talented Community</a>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default App;

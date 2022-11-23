import { useState, useEffect } from "react";
import SignupForm from "./components/SignupForm";
import { Header, Main } from './App.style.js';
import mesheryLogo from './assets/images/meshery-learn-logo.png';
import mesheryLogoLight from './assets/images/meshry-learn-logo-light.png';
import mesheryPlayground from "./assets/images/meshery-playground-meshmap.png";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from './index.style.js';
import { useDarkMode } from "./components/useDarkMode";
import { Toggle } from "./components/Toggle";

const App = () => {

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, []);


  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const Logo = theme === 'light' ? mesheryLogo : mesheryLogoLight;


  return (
    <>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle />
      <Header>

        <nav className={scroll ? "scrolled" : ""}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
          <img className="logo" src={Logo} alt="Meshery Logo" />
          <a href="#signup-form" className="signup-btn" role="button">Sign Up</a>
        </nav>
      </Header>
      <Main>
        <section className="hero">
          <h3 className="cmng-soon-txt">Coming soon...</h3>
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
          <p>The cloud native playground contains a set of learning paths that incorporate an application networking centric ciricullum featuring training on 100+ integrations.</p>
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
      </ThemeProvider>
    </>
  );
}

export default App;

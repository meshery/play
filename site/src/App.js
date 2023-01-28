import SignupForm from "./components/SignupForm";
import { Main } from './App.style.js';
import mesheryPlayground from "./assets/images/meshery-playground-meshmap.png";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from './index.style.js';
import { useDarkMode } from "./components/useDarkMode";
import { Toggle } from "./components/Toggle";
import ReactPlayer from 'react-player/youtube'
import Navigation from "./components/Navigation";

const App = () => {

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <section className="hero">
            <h3 className="try-now-txt">Try it now!</h3>
            <h1>
              The Cloud Native Playground
            </h1>
            <p className="desc-text">
              Explore the Cloud Native Computing Foundation's graduated, incubation, and sandbox projects as well as many other popular open source projects. Use Meshery Playground to explore a new way of DevOps - visual and collaborative configuration management for your infrastructure.
            </p>

            <ReactPlayer
              url="https://www.youtube.com/embed/Do7htKrRzDA?vq=1080p"
              playing
              controls
              light={mesheryPlayground}
              width="90%"
              style={{ margin: "auto" }}
              className="embedVideo"
            />
            <p className="caption">Launch and learn with Meshery</p>
            <p className="byline">The cloud native playground contains a set of learning paths that incorporate an application networking centric curriculum featuring training on 150+ integrations.</p>
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
      </ThemeProvider>
    </>
  );
}

export default App;

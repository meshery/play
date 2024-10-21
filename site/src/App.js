import { Main } from './App.style.js';
import mesheryPlayground from "./assets/images/meshery-playground-kanvas.png";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from './index.style.js';
import { useDarkMode } from "./components/useDarkMode";
import ReactPlayer from 'react-player/youtube'
import Navigation from "./components/Navigation";
import DiscussCallout from './components/Discuss-Callout';
import { useState } from "react";

const App = () => {


  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [showSignUpButton] = useState(true);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} showSignUpButton={showSignUpButton} />
        <Main>
          <section className="hero">
            <h1>
              The Cloud Native Playground
            </h1>
            <p className="desc-text">
              Explore the Cloud Native Computing Foundation's graduated, incubation, and sandbox projects as well as many other popular open source projects. Use Meshery Playground to explore a new way of DevOps - visual and collaborative configuration management for your infrastructure.
            </p>
            <ReactPlayer
              url="https://youtu.be/Do7htKrRzDA"
              playing
              controls
              light={mesheryPlayground}
              width="90%"
              style={{ margin: "auto" }}
              className="embedVideo"
            />
          </section>
          <div className="community-discuss-wrapper">
          <section className="join-community">
            <div>
              <h1>Join the community!</h1>
              <p>Engage in the Meshery community by joining us on Slack</p>
              <a href="https://slack.meshery.io/" >Join Our Open Source Community</a>
            </div>
          </section>
          <section>
          <div className='desc-callout'>
            <DiscussCallout />
          </div>
          </section>
          </div>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
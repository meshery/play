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
import ArrowIcon from './ArrowIcon.js';
import Modal from "react-modal";
import Faq from './components/Faq/index.js';
import Button from './reusecore/Button/index.js';
import ResourcesSection from './Resources.js';

const App = () => {


  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [showSignUpButton] = useState(true);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
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
          </section>
          <section className="playground-btn">
            <div>
              <Button className="continue-btn open-playground-btn" style={{ background: "rgb(235, 192, 23)" }} role="button"  onClick={openModal}>
                Open Playground
              </Button>
              <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="Modal"
              overlayClassName="Overlay"
              ariaHideApp={false}
              contentLabel="Content Form"
            >
              <Button
                className="close-modal-btn"
                onClick={closeModal}
              >
                &times;
              </Button>
              <div class="content">
              <Faq category={["Meshery Playground"]}/>
              <div className="continue-btn-container"
              >
              <a href="https://playground.meshery.io">
              <Button className="continue-btn" style={{ background: "rgb(235, 192, 23)" }}>
                <ArrowIcon />
                Continue
              </Button>
                </a>
                </div>
                <p style={{
                    textAlign: "center",
                    fontSize: "1rem",
                    color: `${props => props.theme.text}`,
                    marginTop: "0.5rem"
                }}>
                  On clicking the continue button you will be redirected to Meshery Playground.</p></div>
            </Modal>
            </div>
          </section>
          <section className="video">
            <ReactPlayer
              url="https://youtu.be/Do7htKrRzDA"
              playing
              controls
              light={mesheryPlayground}
              width="177.778%"
              style={{ margin: "auto" }}
              className="embedVideo"
            />
          </section>
          <section>
            <ResourcesSection />
          </section>
          
          <div className="community-discuss-wrapper">
          <section className="join-community">
            <div>
              <h1>Join the community!</h1>
              <p>Engage in the Meshery community by joining us on Slack</p>
              <Button url="https://slack.meshery.io/" >Join Our Open Source Community</Button>
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

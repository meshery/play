import { Main } from "./App.style.js";
import mesheryPlayground from "./assets/images/meshery-playground-kanvas.png";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "./index.style.js";
import { useDarkMode } from "./components/useDarkMode";
import ReactPlayer from "react-player/youtube";
import Navigation from "./components/Navigation";
import DiscussCallout from "./components/Discuss-Callout";
import { useState } from "react";
import Modal from "react-modal";
import Faq from "./components/Faq/index.js";
import Button from "./reusecore/Button/index.js";
import ResourcesSection from "./Resources.js";
import VendorSelection from "./components/VendorSelection";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
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
        <Navigation
          theme={theme}
          toggleTheme={toggleTheme}
          showSignUpButton={showSignUpButton}
        />
        <Main>
          <section className="hero">
            <h1>A Cloud Native Playground</h1>
            <p className="desc-text">
              Explore the Cloud Native Computing Foundation's graduated,
              incubation, and sandbox projects as well as many other popular
              open source projects. Use a Meshery Playground to explore a new
              way of DevOps - visual and collaborative configuration management
              for your infrastructure.
            </p>
          </section>
          <section className="playground-btn">
            <div>
              <Button
                className="continue-btn open-playground-btn"
                style={{ background: "rgb(235, 192, 23)" }}
                role="button"
                onClick={openModal}
              >
                Choose Your Playground
              </Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
                contentLabel="Playground Selection"
              >
                <Button className="close-modal-btn" onClick={closeModal}>
                  &times;
                </Button>
                <div className="content">
                  <Faq
                    category={[
                      "Cloud Native Playgrounds",
                      "Meshery Playground",
                    ]}
                  />
                  <VendorSelection />
                </div>
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
                <Button url="https://slack.meshery.io/">
                  Join Our Open Source Community
                </Button>
              </div>
            </section>
            <section>
              <div className="desc-callout">
                <DiscussCallout />
              </div>
            </section>
          </div>
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;

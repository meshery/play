import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;

  nav {
    background: ${({ theme }) => theme.body};
    display: flex;
    flex: auto;
    padding: 1.5rem 10rem;
    transition: all 0.3s ease 0s;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
    position: relative;
  }

  .scrolled {
    box-shadow: rgba(0, 179, 159, 0.2) 0px 10px 25px;
  }

  img.logo {
    align-self: center;
    max-width: 400px;
    height: auto;
  }
  .themeToggle {
    margin: auto 0.5rem;
    padding: auto 0.5rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .signup-btn,
  .login-btn {
    font-size: calc(16px + 6 * ((50vw - 320px) / 680));
    transition: 0.2s ease-in-out;
    margin: auto 0.5rem;
  }
  .signup-btn {
    padding: 1rem 1.5rem;
    text-align: center;
    color: #fff;
    background: rgba(235, 192, 23, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(235, 192, 23, 0.3);
    white-space: nowrap;
  }
  .signup-btn:hover {
    background-color: rgba(255, 208, 25, 1);
    box-shadow: 0px 0px 15px rgba(235, 192, 23, 1);
    color: #fff;
  }

  .login-btn {
    margin: 0 0 0 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
    color: #fff;
    white-space: nowrap;
    background: rgba(0, 179, 159, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 179, 159, 0.3);
  }

  .login-btn:hover {
    background-color: #00d3a9;
    box-shadow: 0px 0px 15px rgba(0, 179, 159, 1);
    color: #fff;
  }
  @media screen and (max-width: 1400px) {
    img.logo {
      max-width: 320px;
    }
  }
  @media screen and (max-width: 1100px) {
    nav {
      padding: 1.5em 2.5em;
    }
  }
  @media screen and (max-width: 975px) {
    .themeToggle {
      // position: absolute;
    }
    nav {
      // padding: 1.5rem 5rem;
    }
    // .themeToggle > svg {
    //   width: 32px;
    //   height: 32px;
    // }
    img.logo {
      max-width: 320px;
    }
  }

  @media screen and (max-width: 768px) {
    img.logo {
      max-width: 250px;
    }
    .signup-btn {
      padding: 0.7rem 1rem;
      margin: auto 0.35rem;
    }
    .login-btn {
      padding: 0.7rem 1rem;
      margin: auto 0.35rem;
    }
    .themeToggle > svg {
      width: 28px;
      height: 28px;
    }
  }

  @media screen and (max-width: 615px) {
    nav {
      padding: 1.5rem;
    }

    img.logo {
      max-width: 200px;
    }
  }
  @media screen and (max-width: 500px) {
    img.logo {
      max-width: 180px;
    }
    nav {
      padding: 1.5625rem 0.625rem;
    }
    .themeToggle {
      position: static;
    }
    .signup-btn,
    .login-btn {
      padding: 5px 7px;
    }
    .themeToggle > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Main = styled.main`
  .signup-btn,
  .login-btn {
    font-size: calc(16px + 6 * ((50vw - 320px) / 680));
    margin: auto 0.5rem;
  }
  .signup-btn {
    padding: 1rem 1.5rem;
    text-align: center;
    color: #1e2117;
    background: rgba(235, 192, 23, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(235, 192, 23, 0.3);
    white-space: nowrap;
  }
  .signup-btn:hover {
    background-color: rgba(255, 208, 25, 0.8);
    color: #fff;
  }
  max-width: 75%;
  margin: 5rem auto;

  p {
    font-size: 1.35rem;
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
  }
  .hero {
    p {
      text-align: center;
    }
  }
  .try-now-txt {
    margin-top: -3rem;
    margin-bottom: 1rem;
    font-weight: 300;
    text-align: center;
    font-style: italic;
  }

  .desc-text {
    margin: 0 0 3rem;
  }
  section.video {
    margin: 4rem auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 50px;

  }
  .embedVideo {
    height: 44vw !important;
    border-radius: 2.5%;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.5);

    .react-player__preview {
      border-radius: 1.5%;
    }

    .react-player__play-icon {
      transform: scale(3, 3);
    }

    iframe {
      border-radius: 2.5%;
    }

    @media (max-width: 768px) {
      height: 54vw !important;
    }

    &:hover {
      box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.75);
      .react-player__play-icon {
        border-color: transparent transparent transparent #ebc017 !important;
      }
    }
  }

  .caption {
    color: ${({ theme }) => theme.text};
    margin-top: 0.75rem;
    margin-left: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    font-style: italic;
    text-align: center;
  }

  .byline {
    margin-top: 2rem;
  }

  .form {
    margin: 4rem auto;
  }

  .join-community {
    text-align: center;
  }
section.playground-btn {
  margin-top: 4rem;
  div {
    display: flex;
    justify-content: center;
  }
.open-playground-btn {
  position: relative;
  font-size: 1.4rem;
  height: 3.5rem;
  padding: 1.5rem;
}
.open-playground-btn::after {
  content: '';
  border-radius: 100%;
  border: 0.275rem solid rgb(0,170,159);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 2.5s infinite;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

}

.community-discuss-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  gap: 4rem;
  p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 768px) {
  gap: .2rem;
  flex-wrap: wrap;
  }
}
  .faq {
    text-align: center;
    margin: 4rem auto 0rem auto;
  }

  @media screen and (max-width: 768px) {
    figure {
      width: 90%;
    }
    max-width: 85%;
  }
  @media screen and (max-width: 568px) {
    figure {
      width: 100%;
    }
    max-width: 90%;
  }

  @media screen and (max-width: 344px) {
    .join-community {
      a {
        width: 12rem;
      }
    }
    max-width: 95%;
  }
`;

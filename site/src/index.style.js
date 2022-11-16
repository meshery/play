import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  ::selection {
    background: #3C494F;
    color: #ffffff;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.125rem;
    color: #3C494F;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Qanelas Soft', 'Open Sans', sans-serif;
    color: #1E2117;
    margin: 0;
    line-height: normal;
  }

  h1 {
    font-size: 3.125rem;
    font-weight: 700;
    @media (max-width: 62rem) {
      font-size: 2.125rem;
    }
  }

  h2 {
      font-size: 2.125rem;
      font-weight: 600;
      @media (max-width: 62rem) {
        font-size: 1.75rem;
      }
  }

  h3 {
      font-size: 1.75rem;
      font-weight: 500;
      @media (max-width: 62rem) {
        font-size: 1.5rem;
      }
  }

  h4 {
      font-size: 1.5rem;
      font-weight: 400;
      @media (max-width: 62rem) {
        font-size: 1.25rem;
      }
  }

  h5 {
      font-size: 1.25rem;
      font-weight: 300;
      @media (max-width: 62rem) {
        font-size: 1.1rem;
      }
  }

  h6 {
    font-weight: 200;
    font-size: 1rem;
  }

  p {
    margin: 0 0 1rem 0;
    font-size: 1.125rem;
    font-weight: 400;
    @media (max-width: 62rem) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #00D3A9;
    &:hover {
      color: #00B39F;
    }
  }

  img{
    max-width: 100%;
  }

  section{
    position: relative;
  }
`;

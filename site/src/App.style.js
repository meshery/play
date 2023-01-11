import styled from "styled-components";

export const Header = styled.header`

  position: sticky;
  top: 0;
  background: #FFF;
  z-index: 1;

  nav {
    background: ${({ theme }) => theme.body};
    display: flex;
    flex: auto;
    padding: 1.5rem 10rem;
    transition: all 0.3s ease 0s;
    justify-content: center;
    align-items: center;
    align-content: flex-end;
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
    margin: auto;
    padding: auto .5rem;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .signup-btn, .login-btn {
    font-size: calc(16px + 6 * ((50vw - 320px) / 680));
  }
  .signup-btn {
    margin: 0 0 0 auto;
    padding: 1rem 1.5rem;
    text-align: center;
    color: #FFF;
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
    color: #FFF;
  }

  .login-btn {
    margin: 0 0 0 1rem;
    padding: 1rem 1.5rem;
    text-align: center;
    color: #FFF;
    white-space: nowrap;
    background: rgba(0, 179, 159, 1);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 179, 159, 0.3);
  }

  .login-btn:hover {
    background-color: #00D3A9;
    color: #FFF;
  }
  @media screen and (max-width: 975px) {
    
    nav {
      padding: 1.5rem 5rem;
    }
    .themeToggle > svg {
      width: 32px;
      height: 32px;
    }
    img.logo {
      max-width: 320px;
    }
  }

  @media screen and (max-width: 768px) {
    img.logo {
      max-width: 250px;        
    }

    .signup-btn {
      padding: 0.70rem 1rem;
    }
    .login-btn {
      padding: 0.70rem 1rem;
      margin-left: .5rem;
    }
    .themeToggle > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (max-width: 615px) {

    nav {
      padding: 1.5rem 1.5rem;
    }

    img.logo {
      max-width: 200px;        
    }
  }

  @media screen and (max-width: 368px){
    .signup-btn {
      padding: 7px;
    }
    .login-btn {
      padding: 7px;
    }
    .themeToggle > svg {
      width: 16px;
      height: 16px;
    }
    nav {
      padding: 1.3rem 0.6rem;
    }
  }
`

export const Main = styled.main`

  max-width: 75%;
  margin: 5rem auto;

  p {
			font-size: 1.35rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .try-now-txt {
    margin-top: -3rem;
    margin-bottom: 1rem;
    font-weight: 300;
    text-align: center;
    font-style: italic;
  }

  figure {
    margin: 2rem auto;
    width: 80%;

    img {
      margin-top: 1rem;
      border-radius: 2.5%;
      box-shadow: 0px 3px 20px 4px rgba(0, 179, 159, 0.75);
    }
    figcaption {
      color: ${({ theme }) => theme.text};
      margin-top: 0.75rem;
      margin-left: 1.5rem;
      font-weight: 500;
      font-style: italic;
      text-align: center;
    }
  }

  .form {
    margin: 4rem auto;
  }

  .join-community {
    text-align: center;
    a {
      display: block;
      background: #EBC017;
      color:  ${({ theme }) => theme.btn};
      width: 14rem;
      padding: 1rem;
      margin: auto;
      border-radius: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    figure {
      width: 90%;
    }
  }
  @media screen and (max-width: 568px) {
    figure {
      width: 100%;
    }
  }

  @media screen and (max-width: 344px){
    .join-community {
      a {
        width: 12rem;
      }
    }
  }


`



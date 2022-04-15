import styled from "styled-components";

export const Header = styled.header`

  position: sticky;
  top: 0;
  background: #FFF;
  z-index: 1;

  nav {
    display: flex;
    flex: auto;
    padding: 1.5rem 10rem;
    transition: all 0.3s ease 0s;
  }

  .scrolled { 
    box-shadow: rgba(0, 179, 159, 0.2) 0px 10px 25px;
  }

  .logo {
    display: flex;
    h1 {
      border-right: 0.125rem solid #3C494F;
      padding-right: 0.25rem;
      font-size: 2.5rem;
    }
    img {
      width: 15rem;
      height: auto;
      margin-left: 0.25rem;
    }
  }

  .signup-btn {
    margin: 0 0 0 auto;
    padding: 1.25rem;
    text-align: center;
    background-color: #00B39F;
    color: #FFF;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    
    padding: 1.5rem 6rem;

    .logo {
      align-self: center;
      h1 {
        font-size: 1.5rem;
      }
      img {
        width: 10rem;
      }
    }

    .signup-btn {
      padding: 0.75rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`

export const Main = styled.main`

  max-width: 80%;
  margin: 5rem auto;

  h1 {
    text-align: center;
  }

  figure {
    margin: 2rem auto;
    width: 80%;

    img {
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.75);
    }
    figcaption {
      margin-top: 0.5rem;
      font-weight: 600;
      font-style: italic;
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
      color: #FFF;
      width: 18rem;
      padding: 1rem;
      margin: auto;
      border-radius: 0.5rem;
    }
  }
`



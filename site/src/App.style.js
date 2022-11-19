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
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  .scrolled { 
    box-shadow: rgba(0, 179, 159, 0.2) 0px 10px 25px;
  }

  img.logo {
    align-self: center;
    max-width: 400px;
    height: auto;
  }

  .signup-btn {
    margin: 0 0 0 auto;
    padding: 1.25rem;
    text-align: center;
    background-color: #00B39F;
    color: #FFF;
    border-radius: 0.5rem;
    white-space: nowrap;
  }

  @media screen and (max-width: 900px) {
    
    nav {
      padding: 1.5rem 5rem;
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
      padding: 0.75rem;
    }
  }

  @media screen and (max-width: 568px) {

    nav {
      padding: 1.5rem 2.5rem;
    }

    img.logo {
      max-width: 200px;        
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
  .cmng-soon-txt {
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
      color: #FFF;
      width: 16rem;
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
`



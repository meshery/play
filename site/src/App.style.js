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

  h1 {
    text-align: center;
    margin-bottom: 2rem;
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
    h2{
      margin-left: 2rem;
    }
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



import styled from "styled-components";

export const Header = styled.header`

  position: sticky;
  top: 0;
  background: #FFF;
  z-index: 1;

  .dropdown_btn {
    display: none;
  }

  .dropdown_menu_closed {
    display: none;
  }

  .dropdown_menu_opened {
    display: none;
  }

  .hamburger-icon{
    width: 40px;
    color:#a8afba;
  }
  
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
    margin: auto .5rem;
    padding: auto .5rem;
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
  .signup-btn, .login-btn {
    font-size: calc(16px + 6 * ((50vw - 320px) / 680));
    margin: auto .5rem;
  }
  .signup-btn {
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
    // .themeToggle {
    //   // position: absolute;
    // }
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
      padding: 0.70rem 1rem;
      margin: auto .35rem;
    }
    .login-btn {
      padding: 0.70rem 1rem;
      margin: auto .35rem;
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
      max-width: 250px;        
    }
    nav {
      padding: 1.5625rem 0.625rem;
    }
    .signup-btn{
      padding: 10px 5px;
      width: 100%;
      margin-right: 5px;
    }
    .login-btn {
      padding: 10px 5px;
      width: 100%;
      margin-left: 5px;
    }
    .themeToggle > svg {
      width: 20px;
      height: 20px;
    }
    .themeToggle{
        margin: 0 5px;
        background: ${({ theme }) => theme.body};
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius:20px;
        border: 1px solid gray
    }
    .btn-container{
        display: none;
    }
    .dropdown_btn{
        display:flex;
    }
    .dropdown_menu_opened {
        background: ${({ theme }) => theme.body};
        transition: all 0.3s ease 0s;
        width:100%;
        height:100px;
        border-radius: 0 0 10px 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        justify-content: space-between;
        align-items: center;
        box-shadow: rgba(0, 179, 159, 0.2) 0 20px 20px -2px;
        padding: 20px 0px;
    }
    .mode-btn{
      width:95%;
    }
    .action-btns{
        display: flex;
        width: 95%;
        justify-content: space-around;
        margin-top: 10px;
    }
  }
`

export default Header;
import React from 'react';
//import Logo from './logo.png'; // import the logo image
import mesheryLogo from './assets/images/meshery-learn-logo.png';
import mesheryLogoLight from './assets/images/meshery-learn-logo-white.png';
//import mesheryPlayground from "./assets/images/meshery-playground-meshmap.png" ;
import Toggle from '../Toggle';
import { useDarkMode } from "./components/useDarkMode";



const [theme, toggleTheme] = useDarkMode();
//const themeMode = theme === 'light' ? lightTheme : darkTheme;
const Logo = theme === 'light' ? mesheryLogo : mesheryLogoLight;


function Navbar({scroll, theme, toggleTheme}) {
  return (
    <nav className={scroll ? "scrolled" : ""}>
      <img className="logo" src={Logo} alt="Meshery Logo" />
      <div className="btn-container">
        {<Toggle theme={theme} toggleTheme={toggleTheme} />
        <a href="#signup-form" className="signup-btn" role="button">Sign Up</a>
        <a href="https://playground.meshery.io" className="login-btn" role="button">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;

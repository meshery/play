import { useState, useEffect } from "react";
import { Header } from "./Navigation.styles";
import mesheryLogo from "../../assets/images/meshery-learn-logo.png";
import mesheryLogoLight from "../../assets/images/meshery-learn-logo-white.png";
import { Toggle } from "../Toggle";
import axios from "axios";
import DefaultAvatar from "./DefaultAvatar";
import CloudIcon from "./CloudIcon";
import MeshMapIcon from "./MeshMapIcon";
import LogoutIcon from "./LogoutIcon";
function Navigation({ theme, toggleTheme, showSignUpButton }) {
  const [userData, setUserData] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const Logo = theme === "light" ? mesheryLogo : mesheryLogoLight;
  const [scroll, setScroll] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  function getCookieValue(cookieName) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim(); // Remove whitespace
      if (cookie.indexOf(cookieName + "=") === 0) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    return null;
  }
  function removeCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  useEffect(() => {
    window.addEventListener("scroll", () =>
setScroll((window.scrollY || window.pageYOffset) > 50)
    );
  }, []);

  useEffect(() => {
    const CLOUD_USER_API =
      "https://meshery.layer5.io/api/identity/users/profile";
    const fetchData = async () => {
      try {
        const token = getCookieValue("token");
        const response = await axios.get(CLOUD_USER_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error("There was a problem with your fetch operation: ", error?.toString?.(), error );
      }
    };

    fetchData();
  }, []);
  const handleNavOpen = () => {
    setOpenNav(!openNav);
  };

  return (
    <Header>
      <nav className={scroll ? "scrolled" : ""}>
        <img className="logo" src={Logo} alt="Meshery Logo" />
        <div style={{ display: "flex" }}>
          {userData && (
            <div className="dropdown_btn" onClick={handleNavOpen}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </div>
          )}
          {userData && (
            <div className="dropDown">
              <button
                className="avatar-container"
                onClick={() => setDropDown((prev) => !prev)}
                style={{
                  backgroundImage: `url(${userData.avatar_url})`,
                  backgroundSize: "cover",
                }}
              >
                {!userData.avatar_url && (
                  <DefaultAvatar className="default_avatar" />
                )}
              </button>
              <div
                className={"dropDown-content"}
                style={{ display: `${dropDown ? "block" : "none"}` }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="drop-item"
                  href={`https://meshery.layer5.io/user/${userData.id}`}
                >
                  <CloudIcon /> Cloud
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="drop-item"
                  href="https://playground.meshery.io"
                >
                  <MeshMapIcon /> Playground
                </a>
                <a
                  href="/"
                  onClick={() => {
                    removeCookie("token");
                    window.open("https://meshery.layer5.io/logout", "_blank");

                    // Refresh the current page
                    window.location.reload();
                  }}
                  rel="noreferrer"
                  className="drop-item"
                >
                  <div className="drop-item-icon">
                    <LogoutIcon />
                  </div>
                  Logout
                </a>
              </div>
            </div>
          )}
          <div className="btn-container">
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            {showSignUpButton && !userData && (
              <a href="#signup-form" className="signup-btn" role="button">
                Sign Up
              </a>
            )}
          </div>
        </div>
      </nav>
      <div
        className={openNav ? "dropdown_menu_opened" : "dropdown_menu_closed"}
      >
        <div className="mode-btn">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        {!userData && (
          <div className="action-btns">
            <a href="#signup-form" className="signup-btn" role="button">
              Sign Up
            </a>
            {/* <a href="https://demo.meshery.io" className="login-btn" role="button">Login</a> */}
          </div>
        )}
      </div>
    </Header>
  );
}

export default Navigation;

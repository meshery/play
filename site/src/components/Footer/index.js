import React from "react";
import SlackIcon from "../../assets/images/social-icons/slack.svg";
import DockerIcon from "../../assets/images/social-icons/docker.svg";
import YoutubeIcon from "../../assets/images/social-icons/youtube.svg";
// import TwitterIcon from "../../assets/images/social-icons/twitter.svg";
import GithubIcon from "../../assets/images/social-icons/github.svg";
import CalendarIcon from "../../assets/images/social-icons/calendar.png";
import LinkedinIcon from "../../assets/images/social-icons/linkedin.png";
import BlueskyIcon from "../../assets/images/social-icons/bluesky.svg";
import { ReactComponent as TwitterLogo } from "../../assets/images/social-icons/twitter.svg";
import FooterWrapper from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://meshery.io/community">
              Project
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://meshery.io/calendar">
                <img src={CalendarIcon} alt="Calendar Icon" />
                Calendar
              </a>
            </li>

            <li>
              <a
                className="category-link"
                href="https://hub.docker.com/u/meshery/"
              >
                <img src={DockerIcon} alt="Docker Icon" />
                Docker Hub
              </a>
            </li>
            <li>
              <a className="category-link" href="https://slack.meshery.io/">
                <img src={SlackIcon} alt="Slack Icon" />
                Slack
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://github.com/meshery/play"
              >
                <img src={GithubIcon} alt="GitHub Icon" />
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links getting-started">
          <h3 className="section-title">
            <a
              className="title-link"
              href="https://meshery.io/#getting-started"
            >
              Getting Started
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://docs.meshery.io/">
                Docs
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshery.io/features">
                Features
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshery.io/integrations"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://meshery.io/#getting-started"
              >
                Run Meshery
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshery.io/catalog">
                Meshery Catalog
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links community">
          <h3 className="section-title">
            <a className="title-link" href="https://meshery.io/community">
              Community
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="http://discuss.meshery.io/">
                Discussion Forum
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://meshery.io/blog"
              >Blog
              </a>
            </li> */}
            <li>
              <a className="category-link" href="https://badges.layer5.io">
                Recognition Program
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://layer5.io/community/members"
              >
                Community Members
              </a>
            </li> */}
            <li>
              <a className="category-link" href="https://meshery.io/calendar">
                Community Events
              </a>
            </li>
            <li>
              <a className="category-link" href="https://meshery.io/subscribe">
                Mailing Lists
              </a>
            </li>
            {/* <li>
              <a
                className="category-link"
                href="https://layer5.io/service-mesh-landscape"
              >Service Mesh Comparison
              </a>
            </li> */}
          </ul>
        </div>
        <div className="footer-links resources">
          <h3 className="section-title">
            <a className="title-link" href="https://meshery.io/calendar">
              Social
            </a>
          </h3>
          <ul className="section-categories">
            <li>
              <a className="category-link" href="https://meshery.io/blog">
                {/* <img src={TwitterIcon} alt="Twitter Icon"/>
                Twitter */}
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://twitter.com/mesheryio/"
              >
                <TwitterLogo />
                Twitter
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.youtube.com/Layer5io?sub_confirmation=1"
              >
                <img src={YoutubeIcon} alt="Youtube Icon" />
                Youtube
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://www.linkedin.com/company/meshery/"
              >
                <img src={LinkedinIcon} alt="Linkedin Icon" />
                Linkedin
              </a>
            </li>
            <li>
              <a
                className="category-link"
                href="https://bsky.app/profile/mesheryio.bsky.social"
              >
                <img src={BlueskyIcon} alt="Bluesky Icon" />
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex copyright">
        <div className="text">
          &copy; {new Date().getFullYear()}- The Meshery Authors
        </div>
        <div className="text">Proudly representing every CNCF project</div>
        <div className="text">
          <a href="https://github.com/meshery/meshery/blob/master/CODE_OF_CONDUCT.md">
            Code of Conduct
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

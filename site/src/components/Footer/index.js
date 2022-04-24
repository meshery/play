import React from 'react';
import FooterWrapper from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper> 
      <div className="container">
      <div className='footer-links'> 
      <h3 className="section-title">
                  <a className="title-link" href='https://layer5.io/community'>
                    Community
                  </a>
                  <ul className="section-categories">
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/blog"
                    >Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/community/members"
                    >
                      Contributors
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/community/events/"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="/service-mesh-landscape"
                    >
                      Slack
                    </a>
                  </li>                  
                  <li>
                    <a
                      className="category-link"
                      href="https://github.com/meshery/play"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://discuss.layer5.io/"
                    >
                     Forum
                    </a>
                  </li>
                </ul>
      </h3>
      </div>
      <div className='footer-links'> 
      <h3 className="section-title">
                  <a className="title-link" href='https://layer5.io/community'>
                    Getting Started
                  </a>
                  <ul className="section-categories">
                  <li>
                    <a
                      className="category-link"
                      href="https://meshery.io/features"
                    >Features
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
                    <a
                      className="category-link"
                      href="https://docs.meshery.io/"
                    >
                      Docs
                    </a>
                  </li>
                </ul>
      </h3>
      </div>

      <div className='footer-links'> 
      <h3 className="section-title">
                  <a className="title-link" href='https://layer5.io/resources'>
                    Resources
                  </a>
                  <ul className="section-categories">
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/service-mesh-landscape"
                    >Service Mesh Comparison
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/service-mesh-landscape"
                    >
                      Service Mesh Tools
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/learn/service-mesh-books"
                    >
                      Service Mesh Books
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://layer5.io/learn/service-mesh-workshops"
                    >
                      Service Mesh Workshops
                    </a>
                  </li>                  
                  <li>
                    <a
                      className="category-link"
                      href="https://meshery.io/service-mesh-interface"
                    >
                      Service Mesh Interface Conformance
                    </a>
                  </li>
                </ul>
      </h3>
      </div>
      <div className='footer-links'> 
      <h3 className="section-title">
                  <a className="title-link" href='https://layer5.io/resources'>
                    Socials
                  </a>
                  <ul className="section-categories">
                  <li>
                    <a
                      className="category-link"
                      href="https://twitter.com/mesheryio/"
                    >Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://meshery.io/calendar"
                    >
                      Calender
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://hub.docker.com/u/layer5/"
                    >
                      Docker Hub
                    </a>
                  </li>                  
                  <li>
                    <a
                      className="category-link"
                      href="https://meshery.io/service-mesh-interface"
                    >
                      Slack
                    </a>
                  </li>
                  <li>
                    <a
                      className="category-link"
                      href="https://github.com/meshery/play"
                    >
                      Github
                    </a>
                  </li>
                </ul>
      </h3>
      </div>
    </div>
    <div class="container flex copyright">
					<div class="text">&copy; 2022 The Meshery Authors</div>
					<div class="text">Proudly representing every service mesh</div>
				 	<div class="text"><a href="https://github.com/meshery/meshery/blob/master/CODE_OF_CONDUCT.md">Code of Conduct</a></div>
				</div>
    </FooterWrapper> 
  )
}

export default Footer; 
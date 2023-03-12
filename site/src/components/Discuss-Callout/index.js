import React from "react";
import DiscussWrapper from "./discuss.style";

import Discuss from "../../assets/images/layer5-discuss-white.png";

const DiscussCallout = () => {
  return (
    <DiscussWrapper>
      <div className="explain">
        <div className="cards">
          <div className="card">
            <a href="https://discuss.layer5.io/">
              <div className="parentcard">
                <div className="section-title">
                  <h2>Join the Conversation</h2>
                  <p>Ask questions, find answers and share knowledge on our Discussion Forum</p>
                  <button><img className="logo" alt="Discussion Forum" src={Discuss} /></button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </DiscussWrapper>
  );
};

export default DiscussCallout;

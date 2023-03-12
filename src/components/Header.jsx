import React from "react";
import profileImg from "@assets/profile.jpg";
import waveImg from "@assets/wave.png";
import websiteImg from "@assets/web.svg";
import githubImg from "@assets/github.svg";
import linkedinImg from "@assets/linkedin.svg";
import twitterImg from "@assets/twitter.svg";
import "@styles/Header.scss";

const Header = () => {
  return (
    <header>
      <div className="userInfo">
        <img className="profileImg" src={profileImg} alt="userImg" />
        <div className="welcome">
          <p>
            Welcome!
            <img src={waveImg} alt="waveImg" />
          </p>
          <h2>Alejandro Chavez</h2>
        </div>
      </div>

      <nav>
        <a target="_blank" href="https://alejandroch1202.github.io/">
          <img src={websiteImg} alt="website" />
        </a>
        <a target="_blank" href="https://github.com/alejandroch1202">
          <img src={githubImg} alt="github" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/alejandroch/">
          <img src={linkedinImg} alt="linkedin" />
        </a>
        <a target="_blank" href="https://twitter.com/alejandroch1202">
          <img src={twitterImg} alt="twitter" />
        </a>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import pictureOfMe from "../assets/picture-of-me.jpg";

const Info = () => (
  <div className="info-container">
    <img src={pictureOfMe} alt="Picture of Me" className="info-image" width={100} />
    <div className="info-content">
      <h1>Kieran Lynch</h1>
      <h3>Non-Functional Test Lead</h3>
      <a href="https://kil7.github.io">kil7.github.io</a>
      <div className="info-button-container">
        <button className="email-button button">
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className="linkedin-button button">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  </div>
);

export default Info;

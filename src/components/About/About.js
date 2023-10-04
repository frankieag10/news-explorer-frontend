import React from "react";
import "./about.css";
const imageAvatar = require("../../images/ME.jpeg");

function About() {
  return (
    <div className="about">
      <img
        className="about__avatar"
        src={imageAvatar}
        alt="frank"
      />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Frank is a Fullstack Developer versed in ReactJS, JavaScript, HTML, CSS, NodeJS, Webpack, ExpressJS, MongoDB, and Google Cloud Platform.
        </p>
        <p className="about__paragraph">
          Throughout his work with the TripleTen Software Developer Certification Program, he learned how to utilize all the technologies listed,
          quickly and effectively while working on projects that mimicked real-world projects.
        </p>
      </div>
    </div>
  );
}

export default About;

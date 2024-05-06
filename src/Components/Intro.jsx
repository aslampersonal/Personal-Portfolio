import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../Assets/aslam-profile.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Mohammed Aslam" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects & Clients</h5>
              <small>10+ Successfull Clients<br/>4+ Projects</small>
            </article>
          </div>
          <p>
          Hello! 👋 Evolved from Digital Marketing to MERN Stack Development.<br/>
          Skilled in crafting seamless online experiences with expertise in MongoDB, Express.js, React, and Node.js. Committed to mastering Marketing, SEO, and advancing in the dynamic realm of web development. 🚀
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default Intro;

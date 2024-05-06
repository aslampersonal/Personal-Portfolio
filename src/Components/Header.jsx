import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
import "./Header.css";

import MohammedAslamResume from "../Assets/MohammedAslamResume.pdf"

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Mohammed Aslam</h1>
        <h4 className="text-light">Digital Marketing Expert & Software Developer</h4>
        <div className="cta">
          <a href={MohammedAslamResume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/aslam-mohammed-dm"
            target="_blank"
            rel=" noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/aslampersonal"
            target="_blank"
            rel=" noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/aslam._.mohammed._/"
            target="_blank"
            rel=" noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

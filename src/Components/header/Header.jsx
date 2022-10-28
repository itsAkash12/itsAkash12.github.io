import React from "react";
// import { Link } from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { motion } from "framer-motion";
import "./Header.css";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import logo from "../images/logo.png";
export default function Header() {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -60 }}
      transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
      className="main"
    >
      <div className="container">
        <div className="name">
          <img src={logo} alt="Akash" />
          <p>
            Akash <span>Singh</span>
          </p>
        </div>
        <div className="details">
          <Link className="button" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <button>HOME</button>
          </Link>
          <Link className="button" activeClass="active" to="about" spy={true} smooth={true} offset={20} duration={500}>
            <button>ABOUT ME</button>
          </Link>
          <Link className="button" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>
            <button>SKILLS</button>
          </Link>
          <Link className="button" activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
            <button>PROJECT</button>
          </Link>
          <Link className="button" activeClass="active" to="github" spy={true} smooth={true} offset={-80} duration={500}>
            <button>GITHUB</button>
          </Link>
          <Link className="button" activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <button>CONTACT & RESUME</button>
          </Link>
          <div className="icon">
            <CgSun strokeWidth={1} size={20} color="black" />
          </div>
        </div>
      </div>
      <motion.div animate={{ x: 100 }} />
    </motion.div>
  );
}

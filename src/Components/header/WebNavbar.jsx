import React from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import logo from "../images/logo.png";
import "./Header.css";
import download from "../download/Akash_Singh_Resume.pdf";
import MobileNavbar from "./MobileNavbar";

function WebNavbar({func,sidebar}) {
  function handleClick(){
    window.open("https://drive.google.com/file/d/1pscbGT7ZB11A9NBTOK6TIHmiEeM0GRXL/view?usp=sharing",'_blank');
}
  return (
    <div className="container">
      <div className="name">
        <img src={logo} alt="Akash" />
        <p>
          Akash <span>Singh</span>
        </p>
      </div>
      <div className="details">
        <div className="links_container">
          <Link
            className="button"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button>HOME</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            <button>ABOUT ME</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button>SKILLS</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>PROJECT</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="github"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>GITHUB</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button>CONTACT</button>
          </Link>
          <a
            className="button"
            href={download} download="fw20_1302-Akash-Singh-Resume"
          >
              <button onClick={handleClick}>RESUME</button>
          </a>
        </div>
        <div className="icon">
          <CgSun strokeWidth={1} size={20} color="black" />
        </div>
        <div className="mobile_menu_bars" style={{marginLeft:"15px"}} onClick={func}>
          <MobileNavbar sidebar={sidebar}></MobileNavbar>
        </div>
      </div>
    </div>
  );
}

export default WebNavbar;

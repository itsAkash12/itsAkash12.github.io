import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import logo from "../images/logo.png";
import "./Header.css";
import MobileNavbar from "./MobileNavbar";

function WebNavbar() {
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
            <button>CONTACT & RESUME</button>
          </Link>
        </div>
        <div className="icon">
          <CgSun strokeWidth={1} size={20} color="black" />
        </div>
        <div className="mobile_menu_bars" style={{marginLeft:"15px"}}>
          <MobileNavbar></MobileNavbar>
        </div>
      </div>
    </div>
  );
}

export default WebNavbar;

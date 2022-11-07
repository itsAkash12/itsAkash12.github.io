import React from "react";
import "./Sidebar.css";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
function Sidebar({ sidebar }) {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <li>Home</li>
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <li>About Me</li>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <li>Skills</li>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <li>Projects</li>
      </Link>
      <Link
        activeClass="active"
        to="github"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        <li>Github</li>
      </Link>
      <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <li>Contact</li>
      </Link>
    </div>
  );
}

export default Sidebar;

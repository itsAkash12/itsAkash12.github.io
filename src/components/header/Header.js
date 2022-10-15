import React, { useState } from "react";
import "./Header.css";
// import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import { useScrollBy } from "react-use-window-scroll"

const theme = "dark"
function Header(props) {
  // const theme = props.theme;

  // const styles = style({
  //   cursor: "pointer",
  //   height: "45px",
  //   width: "45px",
  //   marginRight: "5px",
  //   marginLeft: "15px",
  //   paddingTop: "5px",
  //   borderRadius: "50%",
  //   border: "none",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
  //   outline: "none",
  //   transition: "all 0.2s ease-in-out",
  //   ":hover": {
  //     boxShadow: `0 3px 8px ${
  //       props.theme.name === "light" ? "#F7D774" : "#646464"
  //     }`,
  //   },
  // });
  const scrollBy = useScrollBy()

  const link = settings.isSplash ? "/splash" : "home";

  // const [currTheme, setCurrTheme] = useState(props.theme);

  // function changeTheme() {
  //   if (currTheme === "light") {
  //     props.setTheme("dark");
  //     localStorage.setItem("theme", "dark");
  //     setCurrTheme("dark");
  //   } else {
  //     props.setTheme("light");
  //     localStorage.setItem("theme", "light");
  //     setCurrTheme("light");
  //   }
  // }

  const icon =
    theme === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={theme === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={theme === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );
    
  return (
    <div top duration={1000} distance="20px" >
      <div style={{position:"sticky", top:0, display:"black"}}>
        <header className="header" >
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: "black" }}></span>
            <span className="logo-name" style={{ color: "black" }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: "black" }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <Link onClick={()=> scrollBy(100,0)}
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: "black" }}
              >
                Home
              </Link>
            </li>
            {/* <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education and Certifications
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </NavLink>
            </li> */}
            <li>
              <NavLink onClick={()=> scrollBy(2000,0)}
                className="projects"
                to="#"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: "black" }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink onClick={()=> scrollBy(4000,0)}
                className="cr"
                to="#"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: "black" }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <Link onClick={()=> scrollBy(100,0)}
                className="homei"
                to="/home"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: "black" }}
              >
                Contact
              </Link>
            </li>
            <button>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </div>
  );
}


export default Header;

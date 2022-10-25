import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink className="button">
            <button>HOME</button>
          </NavLink>
          <NavLink className="button">
            <button>ABOUT ME</button>
          </NavLink>
          <NavLink className="button">
            <button>SKILLS</button>
          </NavLink>
          <NavLink className="button">
            <button>PROJECT</button>
          </NavLink>
          <NavLink className="button">
            <button>CONTACT & RESUME</button>
          </NavLink>
          <div className="icon">
            <CgSun strokeWidth={1} size={20} color="black" />
          </div>
        </div>
      </div>
      <motion.div animate={{ x: 100 }} />
    </motion.div>
  );
}

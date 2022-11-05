import React from "react";
// import { Link } from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { motion } from "framer-motion";
import "./Header.css";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import WebNavbar from "./WebNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -60 }}
      transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
      className="main"
    >
      <WebNavbar></WebNavbar>
      <motion.div animate={{ x: 100 }} />
    </motion.div>
  );
}

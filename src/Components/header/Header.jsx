import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import WebNavbar from "./WebNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header({openSidebar,sidebar}) {
  console.log(sidebar)
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -60 }}
      transition={{ type: "tween", duration: 0.7, ease: "easeInOut" }}
      className="main"
    >
      <WebNavbar func={openSidebar} sidebar={sidebar}></WebNavbar>
      <motion.div animate={{ x: 100 }} />
    </motion.div>
  );
}

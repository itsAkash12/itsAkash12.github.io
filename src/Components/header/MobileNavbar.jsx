import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function MobileNavbar() {
  return (
    <div className="mobile_parent_container">
      <div className="mobile_bars">
        <FontAwesomeIcon className="open_bars" icon={faBars} />
      </div>
    </div>
  );
}

export default MobileNavbar;

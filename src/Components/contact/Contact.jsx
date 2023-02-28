import React from "react";
import "./Contact.css";
import phone from "../images/phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faContactBook,
  faCompass,
} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import download from "../download/Akash_Singh_Resume.pdf";

export default function Contact() {
  function handleClick() {
    window.open(
      "https://drive.google.com/file/d/1pscbGT7ZB11A9NBTOK6TIHmiEeM0GRXL/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <div id="Contact">
      <p>Contact</p>
      <div className="contact-container">
        <div className="phone-container">
          <img src={phone} alt="phone" />
          <br />
          <div id="button" style={{ marginTop: "0px" }}>
            <a href={download} download="fw20_1302-Akash-Singh-Resume">
              <button onClick={handleClick}>Resume</button>
            </a>
          </div>
        </div>
        <div className="detail-container">
          <div className="resize">
            <div className="boxes">
              <a href="https://www.linkedin.com/in/itsakash12" target="_blank">
                <FontAwesomeIcon
                  className="abc"
                  color="rgb(14, 118, 168)"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
              <div>
                <a
                  href="https://www.linkedin.com/in/itsakash12"
                  target="_blank"
                >
                  <p>Akash Kumar Singh</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="https://github.com/itsAkash12" target="_blank">
                <FontAwesomeIcon
                  color="black"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
              <div>
                <a href="https://github.com/itsAkash12" target="_blank">
                  <p>itsAkash12</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="https://www.instagram.com/akash.ig18/">
                <FontAwesomeIcon color="#8a3ab9" icon={faInstagram} />
              </a>
              <div>
                <a href="https://www.instagram.com/akash.ig18/" target="_blank">
                  <p>akash.ig18</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="mailto:akashviratsingh018@gmail.com">
                <FontAwesomeIcon color="rgb(255, 0, 76)" icon={faEnvelope} />
              </a>
              <div>
                <a href="mailto:akashviratsingh018@gmail.com" target="_blank">
                  <p>akashviratsingh018@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a href="tel:+917985152748">
                <FontAwesomeIcon color="teal" icon={faContactBook} />
              </a>
              <div>
                <a href="tel:+917985152748" target="_blank">
                  <p>+91-7985152748</p>
                </a>
              </div>
            </div>
            <div className="boxes">
              <a>
                <FontAwesomeIcon color="orangered" icon={faCompass} />
              </a>
              <div>
                <a>
                  <p>Varanasi, Uttar Pradesh</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

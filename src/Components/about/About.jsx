import React, { useEffect } from "react";
import "./About.css";
import profile from "../images/final_profile_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos"
import Typewriter from "typewriter-effect";
export default function About() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <div className="about">
      <div className="about-container">
        <div className="left" data-aos={"fade-left"}>
          <p className="hello">Hello 👋.</p>
          <p className="intro">
            I'm<span id="name"><Typewriter
              options={{
                strings: [
                  "Akash Kumar Singh",
                  "आकाश कुमार सिंह",
                ],
                autoStart: true,
                loop: true,
              }}
            /></span>
          </p>
          <div className="type">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer !",
                  "Tech Enthusiast,",
                  "Life-Long Learner.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="links">
            <div className="github">
              <a href="https://github.com/itsAkash12" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/akash-kumar-singh-36a81523a" target="_blank">
                <FontAwesomeIcon
                  className="abc"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div className="envelope">
              <a href="mailto:akashviratsingh018@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div id="button">
            <button>Contact Me</button>
          </div>
        </div>
        <div className="about-img">
          <img src={profile} alt="akki" />
        </div>
      </div>
    </div>
  );
}

import React,{useEffect} from "react";
import "./AboutMe.css";
import FeelingProud from "../greetings/FeelingProud";
import AOS from "aos";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div id="about">
      <div id="AboutMe-parent">
        <p>Who I am</p>
        <div className="parent">
          <div>
            <div className="paragraph" >
              <p>
                My name is Akash Kumar Singh. I'm a Full-Stack Web-Developer
                based in Masai School, Bengaluru.
              </p>
              <p>
                I am a B.Com graduate. love exploring new technologies in the
                field of Web Development and always try to adapt to it. I believe
                in the concept of continuous learning by regularly upgrading my
                skills and enhancing my knowledge.I have learned MERN stack,
                data structures, algorithms, and soft skills at Masai School.
                Besides coding, I love playing Cricket, traveling and Listening
                Music.
              </p>
            </div>
          </div>
          <div className="animation">
            <FeelingProud />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Projects.css";
import sephora from "../images/projects/zee5/2_macbookgold_front.png";
import zee1 from "../images/projects/zee5/5_iphone13promaxgold_portrait.png";
import zee5 from "../images/projects/zee5/1_macbookgold_front.png";
import zee2 from "../images/projects/zee5/4_ipad_gold_landscape.png";
import sep1 from "../images/projects/sephora/1_macbookpro15_front.png";
import sep2 from "../images/projects/sephora/6_iphone13red_portrait.png";
import you1 from "../images/projects/sephora/youtube.png";
import you2 from "../images/projects/sephora/1_iphone12minired_portrait.png";
import wea1 from "../images/projects/sephora/weatherapp.png";
import wea2 from "../images/projects/sephora/2_iphone12minired_portrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const projects = {
  data: [
    {
      id: "0",
      name: "Zee5 Premium",
      pro_img: zee5,
      phone_img: zee1,
      url: "https://github.com/itsAkash12/Zee5_clone",
      deploy_url: "https://zee5-by-akash-singh.netlify.app/",
      // web_url: "booking.png",
      description:
        "Clone of Zee5 which provides both free and subscription based service that allows our their users to access entertainment content including movies and series streamed over the internet to certain Devices",
      languages: [
        {
          name: faReact,
        },
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
    {
      id: "1",
      name: "Sephora Clone",
      pro_img: sep1,
      phone_img: sep2,
      url: "https://github.com/itsAkash12/Sephora_clone",
      deploy_url: "https://beamish-fox-ca0e7f.netlify.app/",
      web_url: "mailchimp.png",
      description:
        "Clone of Sephora website which is basically a Commercial Site which offers various cosmetic products to their Customers",
      languages: [
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
    {
      id: "2",
      name: "Mini Youtube",
      pro_img: you1,
      phone_img: you2,
      url: "https://github.com/itsAkash12/youtube_mini/tree/main/YouTubeMini-II",
      deploy_url: "https://mini-youtubeby-akash.netlify.app/",
      web_url: "booking.png",
      description:
        "Mini-Youtube App with various functionalties such as Searching, Filtering and Trending Videos",
      languages: [
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
    {
      id: "3",
      name: "Weather App",
      pro_img: wea1,
      phone_img: wea2,
      url: "https://github.com/itsAkash12/weatherApp",
      deploy_url: "https://thriving-gecko-577a1d.netlify.app/",
      web_url: "booking.png",
      description:
        "Easy, Fast way to check for the weather nearby your places, with an Auto GPS feature which can Detect your Current Location",
      languages: [
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
  ],
};

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <p>Projects</p>
      <div className="project-cards">
        {projects.data.map((el) => (
          <div className="project">
            <div id="project-cards-image">
              <div>
                <img src={el.pro_img} alt="akash" />
              </div>
              <div>
                <img src={el.phone_img} alt="akash" />
              </div>
            </div>
            <div>
              {el.languages.length <= 3 ? (
                <div className="tech-stack">
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[0].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[1].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[2].name}
                  ></FontAwesomeIcon>
                </div>
              ) : (
                <div className="tech-stack">
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[0].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[1].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[2].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[3].name}
                  ></FontAwesomeIcon>
                </div>
              )}
              <p className="super-name">{el.name}</p>
              <p className="super-des">{el.description}</p>
              <div className="func-buttons">
                <a href={el.url} target="_blank">
                  <button>GitHub</button>
                </a>
                <a href={el.deploy_url} target="_blank">
                  <button>Live</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./cssFiles/mainIntro.css";
import linkedIn from "../../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
import gitHub from "../../../assets/mainIntro-logos/bxl-github.svg.svg";
import Avtar1 from "../../../assets/Avtar1.png";
import backArrow from "../../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import Project from "./project";
import AboutMeHome from "./aboutMeHome";
import Technologies from "./technologies";
import ContactUs from "./contactUs";
import { Link } from "react-router-dom";
import projectsData from "../../projectsData";
import { TypeAnimation } from "react-type-animation";

function MainIntro({ setPageNavigate }) {
  return (
    <div className="main-intro-holder-div">
      <div className="main-intro-content-holder">
        <div className="left-content-holder">
          <h1 className="heading-font-portfolio">
            HI, I AM <br />
            <TypeAnimation
              sequence={["HARSH CHITTORA.", 1000]}
              speed={30}
              style={{ fontSize: "4rem" }}
              repeat={Infinity}
            />
          </h1>
          <span>
            A India-based Developer X Designer with experience in web design, brand identity and product design.
          </span>
          <div className="left-content-buttons-holder">
            <a href="mailto:harshchittora18@gmail.com" className="contact-me-main-intro-button"style={{ color: "black" }}>
              CONTACT ME <img src={backArrow} alt="back-arrow" width="25px" />
            </a>
            <div>
            <Link
                to="https://www.linkedin.com/in/harshchittora"
                style={{ display: "flex" }}
              >
                <img src={linkedIn} alt="linkedIn" />
              </Link>
            </div>
            <div>
              <Link
                to="https://github.com/HarshChittora18"
                style={{ display: "flex" }}
              >
                <img src={gitHub} alt="github" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right-image-holder">
        <img
    src={Avtar1}
    alt="mainIntro"
    width="325px"
    style={{
      borderRadius: "50%",
      width: "380px",
      height: "380px",
      animation: "pulseAnimation 2s ease-in-out infinite",
    }}
  />
  <style>
    {`
      @keyframes pulseAnimation {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
      }
    `}
  </style>
        </div>
      </div>
      <Technologies />
      <div className="projects-holder-div">
        <h1 className="heading-font-portfolio">FEATURED PROJECTS</h1>
        <span>
          Below are a few handpicked projects that demonstrate my fervor for
          front-end development:
        </span>
        {projectsData.map((item, index) => {
          return <Project key={index} props={item} />;
        })}
      </div>
      <AboutMeHome setPageNavigate={setPageNavigate} />
      <ContactUs />
    </div>
  );
}

export default MainIntro;
import React from "react";
import "./about.css";
import gitHub from "../../assets/mainIntro-logos/bxl-github.svg.svg";
import backArrow from "../../assets/mainIntro-logos/arrow-right-top-svgrepo-com.svg";
import linkedIn from "../../assets/mainIntro-logos/bxl-linkedin.svg.svg";
// import aboutBg from "../../assets/about/bg.svg";
import resume from "../../assets/HarshChittoraCV.pdf";
import { Link } from "react-router-dom";
import ContactUs from "../home/componentsHome/contactUs";
import experienceData from "../experinceData";

const capibilties = [
  "JAVA",
  "NODE.JS",
  "REACT",
  "SPRINGBOOT",
  "JAVASCRIPT",
  "BOOTSTRAP",
  "DSA",
  "UI/UX",
  "FIGMA",
];
function About() {
  return (
    <div className="about-page-holder">
      <div className="main-about-holder-div">
        <h1 className="heading-font-portfolio">ABOUT ME</h1>
        <div className="about-me-right-section">
          <h4>I am a Developer X Designer based in India.</h4>
          <p>
            I'm a India-based Developer X Designer with a BTech (CSE) background,
            committed to accessibility and problem-solving. Currently, I'm
            expanding my expertise in React.js and design. Outside of coding, I
            enjoy creating designs and exploring historical narratives for ongoing
            personal development.
          </p>
          <div className="right-section-button-holder">
            <a
              href={resume}
              download="HarshChittoraCV"
              style={{ textDecoration: "none" }}
            >
              <button className="contact-me-main-intro-button">
                DOWNLOAD RESUME{" "}
                <img src={backArrow} alt="back-arrow" width="25px" />
              </button>
            </a>
            <div>
            <Link to="https://www.linkedin.com/in/harshchittora">
              <img src={linkedIn} alt="linkedIN" />
              </Link>
            </div>
            <div>
              <Link to="https://github.com/HarshChittora18">
                <img src={gitHub} alt="github" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={aboutBg} alt="aboutbg" width="700px" /> */}
      {/* capabilites holder */}
      <div className="capabilites-holder">
        <div className="main-about-holder-div">
          <h4 className="heading-font-portfolio">MY CAPABILITIES</h4>
          <div className="about-right-section">
            <p>
              Continuously expanding my skill set, I am currently immersed in
              mastering the following tech stack
            </p>
            <div className="capabilites-list-holder">
              {capibilties.map((item) => {
                return (
                  <div className="captibilty-holder">
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="experience-holder">
        <div className="main-about-holder-div">
          <h4 className="heading-font-portfolio">My EXPERIENCE</h4>
          <div className="about-right-section">
            {experienceData.map((item) => {
              return (
                <div className="experience-item-holder">
                  <div className="item-header">
                    <span>{item.title}</span>
                    <span>
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  <span>{item.company}</span>
                  <ul>
                    {item.description.map((item) => {
                      return <li>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}

export default About;

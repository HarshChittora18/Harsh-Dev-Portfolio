import React from "react";
import "./cssFiles/aboutMeHome.css";

function AboutMeHome({ setPageNavigate }) {
  return (
    <div className="about-me-home-section">
      <h1 className="heading-font-portfolio">ABOUT ME</h1>
      <div className="about-section-details">
        <h4>I'm a Developer x Designer based in India, and an avid Traveler.</h4>
        <span>
        Hello, I'm Harsh Chittora, a passionate Designer and Developer based in India. With extensive experience in software development and a keen eye for design, I blend creativity with technical expertise to craft engaging digital experiences. Previously at Nagarro, I honed my skills in creating innovative solutions. Outside of work, I'm an avid traveler, seeking inspiration from the world around me. Thank you for stopping by!
        </span>
        <button
          onClick={() => {
            setPageNavigate(false);
          }}
        >MORE ABOUT ME
        </button>
      </div>
    </div>
  );
}

export default AboutMeHome;

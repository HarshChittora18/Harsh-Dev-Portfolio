import React from "react";
import java from "../../../assets/tech_stack/java-icon.svg";
import js from "../../../assets/tech_stack/js_logo.svg";
import bootstrap from "../../../assets/tech_stack/logos_bootstrap.svg";
import git from "../../../assets/tech_stack/logos_git-icon.svg";
import vsCode from "../../../assets/tech_stack/vscode-icons_file-type-vscode.svg";
import reactLogo from "../../../assets/tech_stack/react_logo.svg";
import nodejs from "../../../assets/tech_stack/nodejs.svg";
import figma from "../../../assets/tech_stack/figma.svg";
import sql from "../../../assets/tech_stack/sql.svg";
import mongo from "../../../assets/tech_stack/mongo.svg";
import "./cssFiles/technologies.css";


function Technologies() {
  return (
    <div className="technologies-div-holder">
      <h1 className="heading-font-portfolio">MY TECH STACK</h1>
      <span>Recent Tools & Technologies I've been engaged With: </span>
      <div className="tech-logos-holder">
      <img src={java} alt="java" width="100px" />
      <img src={js} alt="JavaScript" width="100px" />
        <img src={reactLogo} alt="React" width="100px" />
        <img src={nodejs} alt="Nodejs" width="100px" />
        <img src={sql} alt="Sql" width="80px" />
        <img src={mongo} alt="mongo" width="100px" />

      </div>
      <div className="tech-logos-holder">
        <img src={bootstrap} alt="Bootstrap" width="100px" />
        <img src={figma} alt ="Figma" width="100px"/>
        <img src={git} alt="Git" width="100px" />
        <img src={vsCode} alt="Visual Studio Code" width="100px" />
      </div>
    </div>
  );
}

export default Technologies;

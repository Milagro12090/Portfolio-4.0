//import react amd zoom animantion from react
import React from "react";
import Zoom from "react-reveal/Zoom";
//imoport create skills
import CreateSKills from "./CreateSKills";
//importing app and skills css
import styles from "./skills.module.css";
import appStyles from "../../app.module.css";
//dev skill declartion with color
const Skills = () => {
  const devSkills = [
    { name: "js", color: `yellow` },
    { name: "react", color: "blue" },
    { name: "html5", color: "deepOrange" },
    { name: "css3", color: "blue" },
    { name: "github", color: "grey" },
    
  ];
//design skills with color declaration
  const DesignSkills = [
    { name: "figma", color: `orange` },
    { name: "photoshop", color: "blue" },
    { name: "ui", color: "blue" },
  ];
  //returning skills html setup
  return (
    <div className={styles.skillContainer} id="Skills">
      <h2 className={appStyles.heading}>Development Skills</h2>
      <Zoom duration={1500} top>
        <CreateSKills skills={devSkills} size="9vw" />
      </Zoom>
      <br />
      <h2 className={appStyles.heading}> Design Skills</h2>
      <Zoom duration={2000} bottom>
        <CreateSKills skills={DesignSkills} size="9vw" />
      </Zoom>
    </div>
  );
};

export default Skills;

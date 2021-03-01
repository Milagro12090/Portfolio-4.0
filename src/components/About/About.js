//import react, web animations and react reveal
import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import Slide from "react-reveal/Slide";
//import app css and module css
import styles from "./about.module.css";
import appStyles from "../../app.module.css";
//use reaveal when page is refreshed
const About = () => {
  const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });
  //return with slide tags and about.png
  return (
    <div className={styles.aboutContainer} id="About">
      <h1
        className={appStyles.heading}
        ref={refRubber}
        onClick={() => getAnimation().play()}>
        About Me
      </h1>
      <div className={styles.contentContainer}>
        <Slide left>
          <img src="./images/about.png" alt="developer illustration" />
        </Slide>
        <Slide right>
          <div className={styles.content}>
            <p>
              I am currently attending a coding bootcamp through Denver University. This has been a 6 
              month full stack course that has gone over everything from basic HTML and css, all the way 
              to React.js and MERN stack. I am living in Lakewood with my girlfriend Merisa and our cat 
              Ron. I am very excited to graduate and dive into the professional enviroment of software development. 
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;

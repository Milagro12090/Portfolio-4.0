import React from "react";
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";
import Slide from "react-reveal/Slide";

import styles from "./about.module.css";
import appStyles from "../../app.module.css";
const About = () => {
  const { ref: refRubber, getAnimation } = useWebAnimations({ ...rubberBand });

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
            I am an aspiring full stack developer living in Lakewood CO. I used to be a pizza chef, but after 4 years of doing that I decided to goto school and try to make something of myself. 
              I attended Denver Universities coding bootcamp for 6 months. I did code for fun a little bit before attending but the school has taught me things I never could learn on my own and 
              attending has been one of the best decisions I have made. 
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;

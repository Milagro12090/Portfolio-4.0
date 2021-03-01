//importing react, web animations for bounce in left/right
import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";
//import css hero
import styles from "./hero.module.css";

const HeroContainer = () => {
  //call bounce animations
  // also calling header.svg at 27
  const { ref: refRight } = useWebAnimations({ ...bounceInRight });
  const { ref: refLeft } = useWebAnimations({ ...bounceInLeft });
  return (
    <div className={styles.heroContainer} id="Home">
      <div className={styles.content} ref={refLeft}>
        <h1 className={styles.bigOne}>
          Hello there
        </h1>
        <p>
          My name is Riley Costello, I am an aspiring full stack developer based in Lakewood CO. Thank you for taking the time to look into my portfolio!.
        </p>
      </div>
      <img
        ref={refRight}
        src="./images/header-image.svg"
        alt="developer illustration"
      />
    </div>
  );
};

export default HeroContainer;
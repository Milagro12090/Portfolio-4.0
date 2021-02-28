
import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";
import styles from "./hero.module.css";

const HeroContainer = () => {
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
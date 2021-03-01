//import react and portfolio.css
import React from "react";
import styles from "./portfolio.module.css";
//inline styling for how the picture fits in the card
function PortfolioCard(props) {
  const inlineStyles = {
    backgroundImage: `url("${props.data.image}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
  };
//html setup for portfoliocard calling all data from data.js
  return (
    <div key={props.index} className={styles.projects}>
      <div className={styles.bgimage} style={inlineStyles}></div>
      <div className={styles.data}>
        <h3>{props.data.name}</h3>
        <p>{props.data.details}</p>
        <a
          className={styles.link}
          href={`${props.data.link}`}
          target="_blank"
          rel="noreferrer">
          Live Project
        </a>
      </div>
    </div>
  );
}

export default PortfolioCard;

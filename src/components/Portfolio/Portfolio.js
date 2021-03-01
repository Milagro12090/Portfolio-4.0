//importing react, carousel, and portfolio card
import React from "react";
import Carousel from "react-elastic-carousel";
import PortfolioCard from "./PortfolioCard";
//importing styles from portfolio.css, carousel.css. and app.css
import styles from "./portfolio.module.css";
import appStyles from "../../app.module.css";
import "./carousel.css";
//const break points for different screen sizes 
//to decide how many portfolio Items appear on the screen
const Portfolio = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 850, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  ];
  //return portfolio html setup along with PortfolioCard keys
  //and data from data.js
  return (
    <div className={styles.portfolioSection} id="Portfolio">
      <h2 className={appStyles.heading}>Portfolio</h2>
      {/* <div className={styles.portfolio}> */}
      <Carousel breakPoints={breakPoints}>
        {props.data.map((item, index) => (
          <PortfolioCard key={index + 1} index={index} data={item} />
        ))}
      </Carousel>

      {/* </div>  */}
    </div>
  );
};

export default Portfolio;

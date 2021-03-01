//import react, sociallink.js and author comp
import React from "react";
import SocialLinks from "./SocialLinks.js";
import Author from "./Author";
//footer structure author is called on 11 to show up on the left and the social links
//will be on the right
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-container">
        <SocialLinks />
        <Author className="author" />
      </div>
    </div>
  );
};

export default Footer;

//import react, footer css
import React from "react";
import "./footer.css";
//linking picture links for git, linkedin, fb, and instagram
function SocialLinks() {
  return (
    <div
      className="icons-container"
      style={{
        fontSize: "2rem",
      }}>
      <a
        target="-blank"
        href="https://www.linkedin.com/in/riley-costello-84bab91b6/">
        <i className={`fab fa-linkedin`}></i>
      </a>
      <a target="-blank" href="https://github.com/Milagro12090">
        <i className={`fab fa-github`}></i>
      </a>
      <a target="-blank" href="https://www.instagram.com/xx.riles420.xx/">
        <i className={`fab fa-instagram`}></i>
      </a>
      <a target="-blank" href="https://www.facebook.com/riley.costello.54">
        <i className={`fab fa-facebook`}></i>
      </a>
      
    </div>
  );
}

export default SocialLinks;
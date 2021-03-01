//import react and fade
import React from "react";
import Fade from "react-reveal/Fade";
//import form.js and contact.css
import Form from "./Form";
import styles from "./contact.module.css";
//only including form as another component so they can both use the fade animation
const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <Fade bottom>
        <div className={styles.heading}>
          <h1>Wanna Get in Touch?</h1>
        </div>
      </Fade>
      <Fade bottom delay={200}>
        <Form />
      </Fade>
    </div>
  );
};

export default Contact;

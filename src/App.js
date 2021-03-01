//import React,container, and config for animations
import React from "react";
import Container from "@material-ui/core/Container";
import config from "react-reveal/globals";
//import all components, data.js, and app css
import {
  Header,
  HeroContainer,
  About,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "./components";
import { data } from "./data";
import styles from "./app.module.css";
//const app for sending the user to the appropriate place
const App = () => {
  const navList = ["Home", "About", "Skills", "Portfolio", "Contact"];
  config({ ssrFadeout: true });

  return (
    <>
      <Container maxWidth="lg" className={styles.container}>
        <Header list={navList} />
        <HeroContainer />
        <About />
        <Skills />
        <Portfolio data={data} />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default App;

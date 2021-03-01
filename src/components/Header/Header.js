//importing react
import React from "react";
//import header.css
import styles from "./header.module.css";
//nav bar setup, connecting css styles
//also added transparency to nav bar
const Header = ({ list }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h4>Riley Costello</h4>
      </div>
      <nav className={styles.nav}>
        <ul>
          {list.map((item, index) => (
            <li key={index + 1} className={styles.naveLink}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

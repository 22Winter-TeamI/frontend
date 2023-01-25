import React from "react";
import styles from "../css/Nav.module.css";
import Logo from "../images/Logo.png";

export default function Nav() {
  return (
    <div className={styles.menuBar}>
      <nav className={styles.menuBar__mainMenu}>
        <div className={styles.container}>
          <a href="/">
            <img style={{ width: "200px" }} src={Logo} />
          </a>
        </div>

        <div className={styles.container}>
          <a href="/loginpage">
            <button>Log in</button>
          </a>
        </div>

        <ul>
          
          <li>
            <a href="/selectpage">
              <div>Select</div>
              <div>Style</div>
            </a>
          </li>

          <li>
            <a href="/backgroundphotoshop">
              <div>Background</div>
              <div>Photoshop</div>
            </a>
          </li>

          <li>
            <a href="/cartoonstyle">
              <div>Cartoon</div>
              <div>Style</div>
            </a>
          </li>

          <li>
            <a href="/gallery">
              <div>Gallery</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import React from "react";
import styles from "../css/Nav.module.css";
import Logo from "../images/Logo.png";

export default function Nav() {
  return (
    <div className={styles.menuBar}>
      <nav className={styles.menuBar__mainMenu}>
        <div className={styles.container}>
          <a href="/">
            <img style={{ width: "130px" }} src={Logo} />
          </a>
        </div>

        <div className={styles.container}>
          <a href="/login">
            <button>Log in</button>
          </a>
        </div>

        <ul>
          <li>
            <a href="/BackgroundPhotoshop">
              <div>Background</div>
              <div>Photoshop</div>
            </a>
          </li>

          <li>
            <a href="/ChangePaintingStyle">
              <div>Change</div>
              <div>Painting Style</div>
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

import React from "react";
import styles from "../css/MenuBar.module.css";
import Logo from "../images/Logo.png";

export default function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <nav className={styles.menuBar__mainMenu}>
        <ul>
          <li>
            <a>
              <img src={Logo} />
            </a>
          </li>
          <li>
            <a href="/">Remove background</a>
          </li>
          <li>
            <a href="/">Convert painting style</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            {/* <a href="/developers">Developers</a> */}
            <button>Login</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

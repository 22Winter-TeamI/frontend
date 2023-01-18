import React from "react";
import styles from "../css/MenuBar.module.css";
import Logo from "../images/Logo.png";

export default function MenuBar() {
  return (
    <div className={styles.menuBar}>
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   marginLeft: "47%",
      // }}
      // className={styles.menuBar__logo}
      >
        <img style={{ width: "150px" }} src={Logo} />

        <a
          // style={{
          //   textAlign: "right",
          //   fontSize: "12px",
          //   fontWeight: "600",
          //   color: "grey",
          //   margin: "10px 10px 0 0",
          //   textDecorationLine: "none",
          // }}
          href="/login"
        >
          LOGIN | LOGOUT
        </a>
      </div>
      <nav className={styles.menuBar__mainMenu}>
        <ul>
          <li>
            <a href="/main">My page</a>
          </li>
          <li>
            <a href="/">Painting Style</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/developers">Developers</a>
          </li>
          {/* <li>

            <a href="/login">
              <button>login</button>
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

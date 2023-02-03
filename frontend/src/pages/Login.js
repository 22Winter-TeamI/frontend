import React from "react";
import styles from "../css/Login.module.css";
import CutA from "../images/CutA.png";
import CutB from "../images/CutB.png";
import LMN from "../images/LMN.png";
import Nav from "../components/Nav";
import Typing from "../components/Typing";
import { getName } from "../components/UploadBoxA";

function Login() {
  return (
    <div
    className={styles.login}
      // style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <Nav />
      <div
        style={{
          position: "absolute",
          left: "53%",
          top: "24%",
          width: "280px",
        }}
      >
        <Typing />
      </div>

      <img
        className={styles.cutA}
        style={{
          position: "absolute",
          top: "0%",
          left: "18%",
          height: "50%",
          width: "35%",
        }}
        src={CutA}
        alt=""
      />

      <img
        className={styles.cutA}
        style={{
          position: "absolute",
          bottom: "0%",
          right: "0%",
          height: "50%",
          width: "35%",
        }}
        src={CutB}
        alt=""
      />
    </div>
  );
}

export default Login;

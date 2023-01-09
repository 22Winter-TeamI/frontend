import React from "react";
// import "../css/ResultPicture.css";
import kaze1 from "../images/kaze1.jpeg";
import styles from "../css/ResultPicture.module.css";

export default function ResultPicture({ title }) {
  return (
    <div className={styles.resultPicture}>
      <div class={styles.resultPicture__imgBox}>
        <img src={kaze1} alt="슬랙이미지 변환" />
      </div>
      <div class={styles.resultPicture__textBox}>
        <p class={styles.resultPicture__textBox__name}>{title}</p>
      </div>
    </div>
  );
}

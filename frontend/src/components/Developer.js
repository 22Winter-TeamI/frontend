import React from "react";
import styles from "../css/Developer.module.css";
import kaze1 from "../images/kaze1.jpeg";

export default function Developer({ name, task }) {
  return (
    <div className={styles.developer}>
      <div className={styles.developer__imgBox}>
        <img src={kaze1} alt="슬랙이미지 변환" />
      </div>
      <div className={styles.developer__textBox}>
        <p className={styles.developer__textBox__name}>{name}</p>
        <p className={styles.developer__textBox__task}>{task}</p>
      </div>
    </div>
  );
}

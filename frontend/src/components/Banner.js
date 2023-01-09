import React from "react";
import styles from "../css/Banner.module.css";

export default function Banner({ text }) {
  return (
    <section className={styles.Banner}>
      <h1 className={styles.Banner__text}>{text}</h1>
    </section>
  );
}

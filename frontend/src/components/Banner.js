import React from "react";
import styles from "../css/Banner.module.css";
import Banner1 from "../images/Banner1.png";

export default function Banner({ text }) {
  return (
    <section className={styles.Banner}>
      {/* <img style={{ display: "relative"}} src={Banner1} alt="" /> */}
      <div className={styles.Banner__text__title}>REPAINT</div>
      <h1 className={styles.Banner__text}>
        Arrange your chosen graphics on <br />
        your canvas, adjust the size, <br />
        change colors, or add outlines or <br /> a drop shadow. Most of our
        <br />
        graphics are vectors so they will
        <br /> not blur when you resize them.
      </h1>
    </section>
  );
}

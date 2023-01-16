import React from "react";
import styles from "../css/Banner.module.css";
import Banner1 from "../images/Banner1.png";
import NoBack from "../images/NoBack.png";
import Frame4 from "../images/Frame4.png";
import Frame6 from "../images/Frame6.png";

export default function Banner({ text }) {
  return (
    <section className={styles.Banner}>
      <div className={styles.Banner__text__title}>REPAINT</div>
      <img className={styles.Banner__img__original} src={Frame4} alt="" />
      <h1 className={styles.Banner__text}>
        Arrange your chosen graphics on <br />
        your canvas, adjust the size, <br />
        change colors, or add outlines or <br /> a drop shadow. Most of our
        <br />
        graphics are vectors so they will
        <br /> not blur when you resize them.
      </h1>
      <img className={styles.Banner__img} src={NoBack} alt="" />
      {/* <img className={styles.Banner__img__back} src={Frame6} alt="" /> */}
    </section>
  );
}

import React from "react";
import styles from "../css/Banner.module.css";
import Banner1 from "../images/Banner1.png";
import NoBack from "../images/NoBack.png";
import Frame4 from "../images/Frame4.png";
import Frame6 from "../images/Frame6.png";
import Frame8 from "../images/Frame8.png";

export default function Banner({ text }) {
  return (
    <>
      <section className={styles.Banner}>
        <div className={styles.Banner__text__title}>REPAINT</div>
        <h1 className={styles.Banner__text}>
          Arrange your chosen image on <br />
          your canvas, choose background <br />
          image, and change paingting style. <br />
          Make your own special art piece!
        </h1>
        <img className={styles.Banner__img} src={NoBack} alt="" />
      </section>
    </>
  );
}

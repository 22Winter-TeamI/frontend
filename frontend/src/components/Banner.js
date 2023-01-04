import React from "react";
import styles from "../css/Banner.css";

export default function Banner({ text }) {
  return (
    <section class="Banner">
      <h1 class="Banner__text">{text}</h1>
    </section>
  );
}

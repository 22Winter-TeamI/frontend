import React from "react";
import styles from "../css/Carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.Banner}>
      <form>
        <input type="radio" name="fancy" autofocus value="page1" id="page1" />
        <input type="radio" name="fancy" value="page2" id="page2" />
        <input type="radio" name="fancy" value="page3" id="page3" />
        <input type="radio" name="fancy" value="page4" id="page4" />
        <label for="page1">page1</label>
        <label for="page2">page2</label>
        <label for="page3">page3</label>
        <label for="page4">page4</label>
      </form>
    </div>
  );
}

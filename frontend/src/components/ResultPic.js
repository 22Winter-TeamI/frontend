import React, { useState } from "react";
// import "../css/ResultPicture.css";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";
import styles from "../css/ResultPicture.module.css";

export default function ResultPic({ title }) {
  const [isListHover, setIsListHover] = useState(false);
  return (
    <div className={styles.resultPic}>
      <div
        className={styles.resultPicture__imgBox}
        onMouseOver={() => setIsListHover(true)}
        onMouseOut={() => setIsListHover(false)}
      >
        <img
          // src={change1}
          src={isListHover ? change3 : change1}
          alt="슬랙이미지 변환"
        />
      </div>
    </div>
  );
}

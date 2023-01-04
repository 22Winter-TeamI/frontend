import React from "react";
import "../css/ResultPicture.css";
import kaze1 from "../images/kaze1.jpeg";

export default function ResultPicture({ title }) {
  return (
    <div class="resultPicture">
      <div class="resultPicture__imgBox">
        <img src={kaze1} alt="슬랙이미지 변환" />
      </div>
      <div class="resultPicture__textBox">
        <p class="resultPicture__textBox__name">{title}</p>
      </div>
    </div>
  );
}

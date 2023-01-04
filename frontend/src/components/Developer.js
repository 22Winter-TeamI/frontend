import React from "react";
import "../css/Developer.css";
import kaze1 from "../images/kaze1.jpeg";

export default function Developer({ name, task }) {
  return (
    <div class="developer">
      <div class="developer__imgBox">
        <img src={kaze1} alt="슬랙이미지 변환" />
      </div>
      <div class="developer__textBox">
        <p class="developer__textBox__name">{name}</p>
        <p class="developer__textBox__task">{task}</p>
      </div>
    </div>
  );
}

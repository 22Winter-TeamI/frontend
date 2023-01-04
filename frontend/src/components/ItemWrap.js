import React from "react";
import "../css/ItemWrap.css";
import kaze1 from "../images/kaze1.jpeg";
import Developer from "./Developer";

export default function ItemWrap() {
  return (
    <div class="itemWrap">
      <Developer name="김주원" task="Front-end" />
      <Developer name="이수림" task="Front-end" />
      <Developer name="임지호" task="Front-end" />
      <Developer name="조상아" task="Front-end" />
      <Developer name="김인철" task="Back-end & AI" />
      <Developer name="박수연" task="Back-end & Devops" />
      <Developer name="심대석" task="Back-end & Devops" />
    </div>
  );
}

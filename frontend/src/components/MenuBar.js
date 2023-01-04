import React from "react";
import "../css/MenuBar.css";

export default function MenuBar() {
  return (
    <div class="menuBar">
      <nav class="menuBar__mainMenu">
        <ul>
          <li>
            <a href="/">Remove background</a>
          </li>
          <hr style={{ border: "0.1px solid #999999" }} />
          <li>
            <a href="/">Convert painting style</a>
          </li>
          <hr style={{ border: "0.1px solid #999999" }} />
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <hr style={{ border: "0.1px solid #999999" }} />
          <li>
            <a href="/developers">Developers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

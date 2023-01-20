import React, { useState } from "react";
import styles from "../css/PaginationArrow.module.css";
import NextArrow from "../images/NextArrow.svg"
import PreviousArrow from "../images/PreviousArrow.svg"

export default function PaginationArrow() {

        return(
            <div className={styles.pagination}>
                <div className={styles.PreviousArrow}>
                <a href="/selectpage">
                  <img
                    src={PreviousArrow}
                    alt="Select Style"
                    className={styles.image}
                  />
                </a>
                </div>

                <div className={styles.NextArrow}>
                <a href="/result">
                  <img
                    src={NextArrow}
                    alt="Result"
                    className={styles.image}
                  />
                </a>
                </div> 
            </div>
        )
}
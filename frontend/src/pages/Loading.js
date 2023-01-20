import styles from "../css/Loading.module.css";
import Nav from "../components/Nav";
import four from "../images/four.svg" ;

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'react-lottie';
import './style.css';
import LottieData from '../images/loading.json';
import HamsterData from '../images/Hamster.json';


export default function Loading() {

    const LottieData = { //예제1
        loop: true,
        autoplay: true,
        animationData: LottieData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    
    const HamsterData = { //예제1
        loop: true,
        autoplay: true,
        animationData: HamsterData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (  
      <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <Nav />
            <div className={styles.content}>
              <h1 className={styles.title}>Repaint</h1>
              
              <img src={four} className={styles.bar} />
            
  
                <div className={styles.select}>


              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
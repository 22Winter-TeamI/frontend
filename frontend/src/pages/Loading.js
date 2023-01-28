import styles from "../css/Loading.module.css";
import Nav from "../components/Nav";
import four from "../images/four.svg" ;

import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
// import loading from '../images/loading.json';
import hamster from '../images/hamster.json';
// import LottieData from "../images/loading.json";
// import HamsterData from "../images/hamster.json";




export default function Loading() {

  // const loading = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: LottieData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };

  // const hamster = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: HamsterData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };


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
            
              <div className={styles.lottie}>
              {/* <Lottie animationData={loading} className={styles.lottieloading} /> */}
              <Lottie animationData={hamster} className={styles.lottiehamster} />
              </div>

              {/* <Lottie
              options={loading}
              height={100}
             width={300}
             isClickToPauseDisabled={true}
               />

              <Lottie
              options={hamster}
              height={300}
             width={300}
             isClickToPauseDisabled={true}
               /> */}

              <h1 className={styles.minititle}>Loading...</h1>


            </div>
          </section>
        </div>
      </div>
    );
  }
  
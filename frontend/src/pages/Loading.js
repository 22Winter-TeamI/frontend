import React, { useEffect, useState, useRef } from 'react';
import Loading from 'react-lottie'; //예제1
import Hamster from 'react-lottie';
import LottieData from '../images/loading.json'; //로딩구슬
import HamsterData from '../images/hamster.json';  //로딩햄스터



import styles from "../css/Loading.module.css";
import Nav from "../components/Nav";
import three from "../images/three.svg" ;


export default function Selectstyle() {

  const optionone = { //로딩구슬
    loop: true,
    autoplay: true,
    animationData: LottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const optiontwo = { //로딩햄스터
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

              <img src={three} className={styles.bar} />   

              <Loading   //로딩구슬
              options={optionone}
              height={100}
              width={300}
              isClickToPauseDisabled={true}
            />
             <Hamster   //로딩햄스터
              options={optiontwo}
              height={300}
              width={300}
              isClickToPauseDisabled={true}
            />
  
              <div className={styles.select}>
              <h1 className={styles.minititle}>Loading...</h1>
            </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
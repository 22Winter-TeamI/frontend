import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import ResultPicture from "../components/ResultPicture";
import styles from "../css/Gallery.module.css";

function Gallery() {
  const [imgSrc, setImgSrc] = useState([]);
  const getname = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/images/background/${getname}`)
      .then((response) => {
        setImgSrc(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [imgSrc2, setImgSrc2] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/images/paint/${getname}`)
      .then((response) => {
        setImgSrc2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  let newBackground = imgSrc.map(({ result_name, photo_name }, index) => {
    return <ResultPicture before={result_name} after={photo_name} />;
  });

  let newPaintingstyle = imgSrc2.map(({ result_name, photo_name }, index) => {
    return <ResultPicture before={result_name} after={photo_name} />;
  });

  return (
    <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <Nav />
      <div className={styles.container} style={{ marginLeft: "20%" }}>
        <section className={styles.wrapper}>
          <h1 className={styles.title}>Gallery</h1>
          <h3 className={styles.subtitle}>Change background</h3>
          <div className={styles.imgwrapper}>
            <div className={styles.containerTest}>{newBackground}</div>
          </div>
          <h3 className={styles.subtitle} style={{ marginTop: "50px" }}>
            Change painting style
          </h3>
          <div className={styles.imgwrapper}>
            <div className={styles.containerTest}>{newPaintingstyle}</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;

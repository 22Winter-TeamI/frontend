import React from "react";
// import styles from "../css/Login.module.css";
import Nav from "../components/Nav";
import ResultPicture from "../components/ResultPicture";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";

// function Gallery() {
//   return (
//     <div
//       style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
//     >
//       <Nav />
//       <div className={styles.container}>
//         <section className={styles.wrapper}>
//           <div
//             style={{
//               width: "100%",
//               display: "flex",
//               padding: "5%",
//               fontSize: "55px",
//             }}
//           >
//             Repaint Background
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "columns",
//               width: "100%",
//               justifyContent: "center",
//               padding: "0 10%",
//             }}
//           >
//             <div className={styles.containerTest}>
//               <ResultPicture before={change1} after={change3} />
//               <ResultPicture before={change1} after={change3} />
//               <ResultPicture before={change1} after={change3} />
//               <ResultPicture before={change1} after={change3} />
//               <ResultPicture before={change1} after={change3} />
//               <ResultPicture before={change1} after={change3} />
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Gallery;

// import Banner from "../components/Banner";
// import MenuBar from "../components/MenuBar";
// import ResultPicture from "../components/ResultPicture";
import styles from "../css/Gallery.module.css";
// import Carousel from "../components/Carousel";
// import change1 from "../images/change1.png";
// import change3 from "../images/change3.png";
// import Slider from "../components/Slider";

function Gallery() {
  const img = [
    ["../images/change1.png", "../images/change3.png"],
    ["../images/change1.png", "../images/change3.png"],
    ["../images/change1.png", "../images/change3.png"],
    ["../images/change1.png", "../images/change3.png"],
    ["../images/change1.png", "../images/change3.png"],
    ["../images/change1.png", "../images/change3.png"],
  ];
  const gallerySlide = () => {
    for (let i = 0; i < img.length; i++) {}
  };
  return (
    <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <Nav />
      <div className={styles.container} style={{ marginLeft: "20%" }}>
        <section className={styles.wrapper}>
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "5%",
              fontSize: "55px",
            }}
          >
            Gallery
          </div>
          <div>change background</div>
          <div
            style={{
              display: "flex",
              flexDirection: "columns",
              width: "100%",
              justifyContent: "center",
              padding: "0 10%",
            }}
          >
            <div className={styles.containerTest}>
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
            </div>
          </div>
          <div>change background</div>
          <div
            style={{
              display: "flex",
              flexDirection: "columns",
              width: "100%",
              justifyContent: "center",
              padding: "0 10%",
            }}
          >
            <div className={styles.containerTest}>
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
              <ResultPicture before={change1} after={change3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;

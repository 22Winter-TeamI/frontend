import MenuBar from "../components/MenuBar";
import styles from "../css/Main.module.css";
import Dog2 from "../images/Dog2.jpg";
import Banner from "../components/Banner";
import ResultPicture from "../components/ResultPicture";
import ex1 from "../images/MainEx/ex1.jpeg";
import ex3 from "../images/MainEx/ex3.jpeg";
import ex5 from "../images/MainEx/ex5.jpg";
import ex6 from "../images/MainEx/ex6.jpg";
import ex7 from "../images/MainEx/ex7.jpg";
import ex8 from "../images/MainEx/ex8.jpg";
import ex9 from "../images/MainEx/ex9.jpg";
import ex10 from "../images/MainEx/ex10.jpg";
import ex12 from "../images/MainEx/ex12.jpg";
import ex13 from "../images/MainEx/ex13.jpg";
import exA from "../images/MainEx/exA.png";
import exC from "../images/MainEx/exC.png";
import exE from "../images/MainEx/exE.png";
import exF from "../images/MainEx/exF.png";
import exG from "../images/MainEx/exG.png";
import exH from "../images/MainEx/exH.png";
import exI from "../images/MainEx/exI.png";
import exJ from "../images/MainEx/exJ.png";
import exL from "../images/MainEx/exL.png";
import exM from "../images/MainEx/exM.png";
import cam1 from "../images/Main/cam1.jpg";
import cam2 from "../images/Main/cam2.png";
import cam3 from "../images/Main/cam3.png";
import cam4 from "../images/Main/cam4.png";
import aa from "../images/MainEx/aa.png";

// import Frame19 from "../images/Frame19.png";

function Main() {
  return (
    <>
      <div className={styles.container} style={{ backgroundColor: "#FFFEFE" }}>
        <section className={styles.wrapper}>
          <MenuBar />
          <Banner />
          <div
            style={{
              width: "100%",
              padding: "20px 5%",
              fontSize: "30px",
            }}
          >
            {/* <img src={Dog} alt="예시 이미지" /> */}

            <div
              style={{
                fontFamily: "Open Sans",
                fontSize: "36px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333",
                margin: "60px 0 40px",
              }}
            >
              Change your image to New Painting Style !
            </div>
            <div
              className={styles.outWrapper}
              // style={{ display: "flex", justifyContent: "center" }}
            >
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={cam1} alt="예시 이미지" />
                <div className={styles.exFont}>Original</div>
              </div>
              <div className={styles.exWrapper}>
                <img
                  style={{ border: "0.5px solid grey" }}
                  className={styles.exImg}
                  src={cam2}
                  alt="예시 이미지"
                />
                <div className={styles.exFont}>Remove Background</div>
              </div>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={cam3} alt="예시 이미지" />
                <div className={styles.exFont}>New Background</div>
              </div>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={cam4} alt="예시 이미지" />
                <div className={styles.exFont}>New Painting Style</div>
              </div>
            </div>
            <div
              style={{
                fontFamily: "Open Sans",
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333",
                margin: "60px 0 40px",
              }}
            >
              Repaint Gallery
            </div>
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
                <div className={styles.navBar}>
                  <ResultPicture before={ex8} after={exH} />
                </div>
                <div className={styles.main}>
                  <ResultPicture before={ex3} after={exC} />
                </div>
                <div className={styles.sidebar}>
                  <ResultPicture before={ex12} after={exL} />
                </div>
                <div className={styles.sidebar1}>
                  <ResultPicture before={ex9} after={exI} />
                </div>
                <div className={styles.sidebar2}>
                  <ResultPicture before={ex13} after={exM} />
                </div>
                <div className={styles.contentBox}>
                  <div className={styles.content1}>
                    <ResultPicture before={ex7} after={exG} />
                  </div>
                  <div className={styles.content2}>
                    <ResultPicture before={ex10} after={exJ} />
                  </div>
                  <div className={styles.content3}>
                    <ResultPicture before={ex5} after={exE} />
                  </div>
                  <div className={styles.content3}>
                    <ResultPicture before={ex1} after={exA} />
                  </div>
                </div>
                <div className={styles.footer}>
                  <ResultPicture before={ex6} after={aa} />
                </div>
              </div>
              {/* <Slider /> */}
            </div>
          </div>
        </section>
      </div>
      {/* <Slider /> */}
    </>
  );
}

export default Main;

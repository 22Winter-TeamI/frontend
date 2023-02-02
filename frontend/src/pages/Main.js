import MenuBar from "../components/MenuBar";
import styles from "../css/Main.module.css";
import Carousel from "../components/Carousel";
import Dog from "../images/Dog.jpg";
import Dog2 from "../images/Dog2.jpg";
import Slider from "../components/Slider";
import Banner from "../components/Banner";
import ResultPicture from "../components/ResultPicture";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";
import ex1 from "../images/MainEx/ex1.jpeg";
import exA from "../images/MainEx/exA.png";
import exB from "../images/MainEx/exB.png";
import ex3 from "../images/MainEx/ex3.jpeg";
import ex5 from "../images/MainEx/ex5.jpg";
import ex6 from "../images/MainEx/ex6.jpg";
import ex7 from "../images/MainEx/ex7.jpg";
import ex8 from "../images/MainEx/ex8.jpg";
import ex9 from "../images/MainEx/ex9.jpg";
import ex10 from "../images/MainEx/ex10.jpg";
import ex12 from "../images/MainEx/ex12.jpg";
import ex13 from "../images/MainEx/ex13.jpg";

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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={Dog} alt="예시 이미지" />
                <div className={styles.exFont}>Original</div>
              </div>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={Dog2} alt="예시 이미지" />
                <div className={styles.exFont}>Remove Background</div>
              </div>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={Dog} alt="예시 이미지" />
                <div className={styles.exFont}>New Background</div>
              </div>
              <div className={styles.exWrapper}>
                <img className={styles.exImg} src={Dog2} alt="예시 이미지" />
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
                  <ResultPicture before={ex8} after={exA} />
                </div>
                <div className={styles.main}>
                  <ResultPicture before={ex3} after={exA} />
                </div>
                <div className={styles.sidebar}>
                  <ResultPicture before={ex12} after={exA} />
                </div>
                <div className={styles.sidebar1}>
                  <ResultPicture before={ex9} after={exB} />
                </div>
                <div className={styles.sidebar2}>
                  <ResultPicture before={ex13} after={exB} />
                </div>
                <div className={styles.contentBox}>
                  <div className={styles.content1}>
                    <ResultPicture before={ex7} after={change3} />
                  </div>
                  <div className={styles.content2}>
                    <ResultPicture before={ex10} after={change3} />
                  </div>
                  <div className={styles.content3}>
                    <ResultPicture before={ex5} after={change3} />
                  </div>
                  <div className={styles.content3}>
                    <ResultPicture before={ex1} after={change3} />
                  </div>
                </div>
                <div className={styles.footer}>
                  <ResultPicture before={ex6} after={change3} />
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

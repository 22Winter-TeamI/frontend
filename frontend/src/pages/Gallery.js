import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
// import ResultPicture from "../components/ResultPicture";
import ResultPicture from "../components/ResultPic";
import styles from "../css/Main.module.css";
import Carousel from "../components/Carousel";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";
import Slider from "../components/Slider";

function Gallery() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MenuBar />
          <Carousel />
          <div
            style={{
              width: "100%",
              display: "flex",
              padding: "5%",
              fontSize: "55px",
            }}
          >
            Repaint Background
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
                <ResultPicture before={change1} after={change3} />
              </div>
              <div className={styles.main}>
                <ResultPicture before={change1} after={change3} />
              </div>
              <div className={styles.sidebar}>
                <ResultPicture before={change1} after={change3} />
              </div>
              <div className={styles.sidebar1}>
                <ResultPicture before={change1} after={change3} />
              </div>
              <div className={styles.sidebar2}>
                <ResultPicture before={change1} after={change3} />
              </div>
              <div className={styles.contentBox}>
                <div className={styles.content1}>
                  <ResultPicture before={change1} after={change3} />
                </div>
                <div className={styles.content2}>
                  <ResultPicture before={change1} after={change3} />
                </div>
                <div className={styles.content3}>
                  <ResultPicture before={change1} after={change3} />
                </div>
                <div className={styles.content3}>
                  <ResultPicture before={change1} after={change3} />
                </div>
              </div>
              <div className={styles.footer}>
                <ResultPicture before={change1} after={change3} />
              </div>
            </div>
            {/* <Slider /> */}
          </div>
        </section>
      </div>
      {/* <Slider /> */}
    </>
  );
}

export default Gallery;

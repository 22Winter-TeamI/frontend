import "../css/Main.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ResultPicture from "../components/ResultPicture";
import styles from "../css/Main.module.css";
import Carousel from "../components/Carousel";

function Main() {
  return (
    // <>
    //   {/* <Banner text="Test main" /> */}

    //   <div className={styles.container}>
    //     <section className={styles.wrapper}>
    //       <MenuBar />
    //       <Carousel />
    //       <div className={styles.itemWrap}>
    //         <ResultPicture title="내가 만든 사진 1" />
    //         <ResultPicture title="내가 만든 사진 2" />
    //         <ResultPicture title="내가 만든 사진 3" />
    //         <ResultPicture title="내가 만든 사진 4" />
    //         <ResultPicture title="내가 만든 사진 5" />
    //         <ResultPicture title="내가 만든 사진 6" />
    //       </div>
    //     </section>
    //   </div>
    // </>

    <>
      {/* <Banner text="Gallery module" /> */}
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MenuBar />
          <Carousel />
          {/* <Banner text="Gallery module" /> */}
          <div
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", textAlign: "center" }}>
              Repaint Background
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <div className={styles.itemWrap}>
                <ResultPicture title="내가 만든 사진 1" />
                <ResultPicture title="내가 만든 사진 2" />
                <ResultPicture title="내가 만든 사진 3" />
                <ResultPicture title="내가 만든 사진 3" />
              </div>
              <ResultPicture title="내가 만든 사진 1" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;

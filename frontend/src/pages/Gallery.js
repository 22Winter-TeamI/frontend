import "../css/Main.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ResultPicture from "../components/ResultPicture";
import styles from "../css/Main.module.css";

function Gallery() {
  return (
    <>
      <Banner text="Gallery module" />
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MenuBar />
          <div style={{ width: "100%", textAlign: "center" }}>
            Repaint Background
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.itemWrap}>
              <ResultPicture title="내가 만든 사진 1" />
              <ResultPicture title="내가 만든 사진 2" />
              <ResultPicture title="내가 만든 사진 3" />
              <ResultPicture title="내가 만든 사진 3" />
            </div>
            <ResultPicture title="내가 만든 사진 1" />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            Repaint Painting Style
          </div>
          <div className={styles.itemWrap}>
            <ResultPicture title="내가 만든 사진 4" />
            <ResultPicture title="내가 만든 사진 5" />
            <ResultPicture title="내가 만든 사진 6" />
            <ResultPicture title="내가 만든 사진 3" />
          </div>
          <div style={{ display: "flex" }}>
            <ResultPicture title="내가 만든 사진 1" />
            <ResultPicture title="내가 만든 사진 2" />
            <ResultPicture title="내가 만든 사진 3" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;

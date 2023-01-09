import "../css/Main.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ResultPicture from "../components/ResultPicture";
import styles from "../css/Main.module.css";

function Main() {
  return (
    <>
      <Banner text="Test main" />
      <div className={styles.container}>
        <section class={styles.wrapper}>
          <MenuBar />
          <div class={styles.itemWrap}>
            <ResultPicture title="내가 만든 사진 1" />
            <ResultPicture title="내가 만든 사진 2" />
            <ResultPicture title="내가 만든 사진 3" />
            <ResultPicture title="내가 만든 사진 4" />
            <ResultPicture title="내가 만든 사진 5" />
            <ResultPicture title="내가 만든 사진 6" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;

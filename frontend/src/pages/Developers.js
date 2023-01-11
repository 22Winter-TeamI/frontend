import styles from "../css/Main.module.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ItemWrap from "../components/ItemWrap";

function Developers() {
  return (
    <>
      <Banner text="Developers" />
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MenuBar />
          <ItemWrap />
        </section>
      </div>
    </>
  );
}

export default Developers;

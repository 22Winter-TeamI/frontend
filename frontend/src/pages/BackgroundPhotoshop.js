// import UploadBox1 from "../components/UploadBox1";
// import UploadBox2 from "../components/UploadBox2";
import UploadBoxA from "../components/UploadBoxA";
import UploadBoxB from "../components/UploadBoxB";
import styles from "../css/BackgroundCartoon.module.css";
import Nav from "../components/Nav";
import PaginationArrow from "../components/PaginationArrow";
import two from "../images/two.svg";

export default function ImageUploadA() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Background Photoshop</h1>

            <img src={two} className={styles.bar} />

            <div className={styles.twouploadboxes}>
              {/* <UploadBoxA /> */}
              <UploadBoxB />
            </div>

            <div>
              <PaginationArrow />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

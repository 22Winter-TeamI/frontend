import UploadBox1 from "../components/UploadBox1";
import styles from "../css/BackgroundCartoon.module.css";
import Nav from "../components/Nav";
import PaginationArrow from "../components/PaginationArrow";
import two from "../images/two.svg";
import TestBox from "../components/TestBox";
import UploadBoxA from "../components/UploadBoxA";
import UploadBoxOne from "../components/UploadBoxOne";

export default function ImageUploadB() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Cartoon Style</h1>
            <img src={two} className={styles.bar} />

            <div className={styles.oneuploadbox}>
              {/* <UploadBox1 /> */}
              <UploadBoxA />
              {/* <TestBox /> */}
              {/* <UploadBoxOne /> */}
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

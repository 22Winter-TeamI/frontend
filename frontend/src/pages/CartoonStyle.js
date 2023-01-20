import Uploader1 from "../components/Uploader1";
import styles from "../css/ImageUpload2.module.css";
import Nav from "../components/Nav";
import PaginationArrow from '../components/PaginationArrow'

export default function ImageUploadB() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Cartoon Style</h1>

            <div className={styles.bgbox}>
            <div className={styles.imageboxes}>          
            <Uploader1 />
            </div>
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
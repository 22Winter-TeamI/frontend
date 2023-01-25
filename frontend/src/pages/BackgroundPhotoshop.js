import Uploader1 from "../components/Uploader1";
import Uploader2 from "../components/Uploader2";
import styles from "../css/ImageUpload2.module.css";
import Nav from "../components/Nav";
import PaginationArrow from '../components/PaginationArrow'
import two from "../images/two.svg" ;

export default function ImageUploadA() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Background Photoshop</h1>
            <img src={two} className={styles.bar} />
            
              <div className={styles.bgbox}>
              <div className={styles.imageboxes}>          
              <Uploader1 />
              <Uploader2 />
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
import styles from "../css/Result.module.css";
import Nav from "../components/Nav";
import four from "../images/four.svg" ;
import before from "../images/Frame4.png" ;
import after from "../images/Frame8.png" ;
import DownloadButton from "../components/DownloadButton";
import image1 from "../components/DownloadButton";
import fileName1 from "../components/DownloadButton";

export default function Selectstyle() {
    return (  
      <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
        <div className={styles.container}>
          <section className={styles.wrapper}>
            <Nav />
            <div className={styles.content}>
              <h1 className={styles.title}>Result</h1>
              
              <img src={four} className={styles.bar} />
  
              <div className={styles.select}>
                <div className={styles.imagebox}>
                <div className={styles.image_text}>
                    <div>Background</div>
                  </div>

                    <img
                      src={before}
                      alt="Background Photoshop"
                      className={styles.image}
                    />

                </div>
  
                <div className={styles.imagebox}>
                <div className={styles.image_text}>
                    <div>Change</div>
                  </div>

                    <img
                      src={after}
                      alt="Change Painting Style"
                      className={styles.image}
                    />

                  <div>
                  <DownloadButton image1={image1} fileName1={fileName1} />
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
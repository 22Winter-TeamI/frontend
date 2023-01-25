import styles from "../css/Selectstyle.module.css";
import Nav from "../components/Nav";
import leftbutton from "../images/leftbutton.jpg";
import rightbutton from "../images/rightbutton.jpg";
import one from "../images/one.svg" ;

// import ProgressBar from "../components/ProgressBar";

export default function Selectstyle() {
  return (  
    <div
    style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
  >
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Select Style</h1>
            
            <img src={one} className={styles.bar} />
          
            {/* <div className={styles.undercontent} >
              <h4 className={styles.undername}>Select Style</h4>
              <h4 className={styles.undername}>Choose Image</h4>
              <h4 className={styles.undername}>Repaint</h4>
              <h4 className={styles.undername}>Download Result</h4>
            </div>   */}
            

            <div className={styles.select}>
              <div className={styles.imagebox}>
                <a href="/backgroundphotoshop">
                  <img
                    src={leftbutton}
                    alt="Background Photoshop"
                    className={styles.image}
                  />
                </a>
                <div className={styles.image_text}>
                  <div>Background</div>
                  <div>Photoshop</div>
                </div>
              </div>

              <div className={styles.imagebox}>
                <a href="/cartoonstyle">
                  <img
                    src={rightbutton}
                    alt="Cartoon Style"
                    className={styles.image}
                  />
                </a>
                <div className={styles.image_text}>
                  <div>Change</div>
                  <div>Painting Style</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

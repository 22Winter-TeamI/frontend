import styles from "../css/Result.module.css";
import Nav from "../components/Nav";
import four from "../images/four.svg" ;
import leftimg from "../images/Frame4.png";
import rightimg from "../images/Frame8.png";



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
                <div className={styles.image_text}>Before</div>
                    <img
                      src={leftimg}
                      alt="before image"
                      className={styles.image}
                    />
                </div>
  
                <div className={styles.imagebox}>
                    <div  className={styles.image_text}>After</div>
                        <img
                        src={rightimg}
                        alt="after image"
                        className={styles.image}
                    />
                </div>

                
                {/* const downloadTxtFile = () => {
                console.log("download logic goes here")
                }

                <div className={btnDiv}>
                    <button id="downloadBtn" 
                    onClick={downloadTxtFile}
                    value="download">Download</button>
                </div>   */}

            
                </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
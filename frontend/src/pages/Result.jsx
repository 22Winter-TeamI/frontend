import { createContext, useContext } from "react";
import styles from "../css/Result.module.css";
import Nav from "../components/Nav";
import four from "../images/four.svg";
import before from "../images/Frame4.png";
import after from "../images/Frame8.png";
import DownloadButton from "../components/DownloadButton";
import image1 from "../components/DownloadButton";
import fileName1 from "../components/DownloadButton";
import GetResult from "../components/GetResult";
import GetOrigin from "../components/GetOrigin";

export default function Selectstyle() {
  const getname = localStorage.getItem("username");
  return (
    <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <Nav />
          <div className={styles.content}>
            <h1 className={styles.title}>Result</h1>

            <img src={four} className={styles.bar} alt="" />

            <div className={styles.select}>
              <div className={styles.imagebox}>
                <div className={styles.image_text}>
                  <div>Before : {getname}</div>
                </div>

                <div className={styles.image}>
                  <GetOrigin />
                </div>
              </div>

              <div className={styles.imagebox}>
                <div className={styles.image_text}>
                  <div>After</div>
                </div>

                <div className={styles.image}>
                  <GetResult />
                </div>

                <div>
                  <DownloadButton
                    imageURL="http://localhost:8000/api/v1/image/result/string"
                    fileName="aa"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

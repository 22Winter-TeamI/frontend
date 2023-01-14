import MenuBar from "../components/MenuBar";
import styles from "../css/Main.module.css";
import Carousel from "../components/Carousel";
import Dog from "../images/Dog.jpg";
import Dog2 from "../images/Dog2.jpg";
import Slider from "../components/Slider";
import Banner from "../components/Banner";

function Main() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <MenuBar />
          {/* <Carousel /> */}
          <Banner />
          <div
            style={{
              width: "100%",
              padding: "20px 5%",
              fontSize: "30px",
            }}
          >
            <div>Change your image to New Painting Style !</div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "350px",
                    width: "250px",
                    margin: "0 10px",
                    borderRadius: "5px",
                  }}
                  src={Dog}
                  alt="예시 이미지"
                />
                Original
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "350px",
                    width: "250px",
                    margin: "0 10px",
                    borderRadius: "5px",
                  }}
                  src={Dog2}
                  alt="예시 이미지"
                />
                Remove Background
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "350px",
                    width: "250px",
                    margin: "0 10px",
                    borderRadius: "5px",
                  }}
                  src={Dog}
                  alt="예시 이미지"
                />
                New Background
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  style={{
                    height: "350px",
                    width: "250px",
                    margin: "0 10px",
                    borderRadius: "5px",
                  }}
                  src={Dog2}
                  alt="예시 이미지"
                />
                New Painting Style
              </div>
            </div>
          </div>
        </section>
      </div>
      <Slider />
    </>
  );
}

export default Main;

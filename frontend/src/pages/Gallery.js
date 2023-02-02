import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import ResultPicture from "../components/ResultPicture";
import change1 from "../images/change1.png";
import change3 from "../images/change3.png";
import styles from "../css/Gallery.module.css";

function Gallery() {
  // const imgSrc = [
  //   {
  //     before:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //     after:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //   },
  //   {
  //     before:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //     after:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //   },
  //   {
  //     before:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //     after:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //   },
  //   {
  //     before:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //     after:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //   },
  //   {
  //     before:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //     after:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //   },
  //   {
  //     before:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //     after:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //   },
  // ];
  const [imgSrc, setImgSrc] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/images/background/string")
      .then((response) => {
        setImgSrc(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [imgSrc2, setImgSrc2] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/image/paint/string")
      .then((response) => {
        setImgSrc2(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const imgSrc2 = [
  //   {
  //     before:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //     after:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //   },
  //   {
  //     before:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //     after:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //   },
  //   {
  //     before:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //     after:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //   },
  //   {
  //     before:
  //       "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMzBfODUg%2FMDAxNjY5Nzg3NDAyMjAw.e8ohfkDiTaTpSENFnJuVjX6Z56-JI3IGAP41QP9zCewg.jn5kWc2IFa_xIrJGIqWZ3UGnbtJaE1pYheGYs7ChNasg.JPEG.rlaeksql2828%2FIMG_0870.JPG&type=a340",
  //     after:
  //       "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",
  //   },
  // ];

  // {imgSrc.map(({ result_name, photo_name }, index) => (
  //   <div key={index}>
  //     <img
  //       style={{ width: "200px" }}
  //       src={result_name}
  //       alt="Before"
  //     />
  //     <img
  //       style={{ width: "200px" }}
  //       src={photo_name}
  //       alt="After"
  //     />
  //   </div>
  // ))}

  let newBackground = imgSrc.map(({ result_name, photo_name }, index) => {
    return <ResultPicture before={result_name} after={photo_name} />;
  });

  let newPaintingstyle = imgSrc2.map(({ result_name, photo_name }, index) => {
    return <ResultPicture before={result_name} after={photo_name} />;
  });

  // let newPaintingstyle = imgSrc2.map((item, index) => {
  //   return (
  //     <ResultPicture
  //       before={imgSrc2[index].before}
  //       after={imgSrc2[index].after}
  //     />
  //   );
  // });

  // let arrImg = () => {
  //   let arr1 = [1, 2, 3, 4];
  //   let newNumbers = imgSrc.map((item, index) => {
  //     return (
  //       <ResultPicture
  //         before={imgSrc[index].before}
  //         after={imgSrc[index].after}
  //       />
  //     );
  //   });
  //   let newNumbers2 = arr1.map((itm, idx) => {
  //     return (
  //       <ResultPicture before={imgSrc[idx].before} after={imgSrc[idx].after} />
  //     );
  //   });
  //   if (imgSrc.length > 4) {
  //     return newNumbers2;
  //   } else {
  //     return newNumbers;
  //   }
  // };

  return (
    <div
      style={{ backgroundColor: "#F2C9C9", overflow: "auto", height: "100vh" }}
    >
      <Nav />
      <div className={styles.container} style={{ marginLeft: "20%" }}>
        <section className={styles.wrapper}>
          <h1 className={styles.title}>Gallery</h1>
          <h3 className={styles.subtitle}>Change background</h3>

          {/* <div style={{ backgroundColor: "white" }}> */}
          <div className={styles.imgwrapper}>
            <div className={styles.containerTest}>{newBackground}</div>
            {/* <div>
              {imgSrc.map(({ result_name, photo_name }, index) => (
                <div key={index}>
                  <img
                    style={{ width: "200px" }}
                    src={result_name}
                    alt="Before"
                  />
                  <img
                    style={{ width: "200px" }}
                    src={photo_name}
                    alt="After"
                  />
                </div>
              ))}
            </div> */}
          </div>
          {/* </div> */}
          <h3 className={styles.subtitle} style={{ marginTop: "50px" }}>
            Change painting style
          </h3>
          <div className={styles.imgwrapper}>
            <div className={styles.containerTest}>{newPaintingstyle}</div>
            {/* <div>
              {imgSrc2.map(({ result_name, photo_name }, index) => (
                <div key={index}>
                  <img
                    style={{ width: "200px" }}
                    src={result_name}
                    alt="Before"
                  />
                  <img
                    style={{ width: "200px" }}
                    src={photo_name}
                    alt="After"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;

import React, { useState } from "react";
import axios from "axios";
import styles from "../css/UploadBoxA.module.css";
import UploadPictureIcon from "../images/UploadPictureIcon.svg";

export default function Uploader() {
  const [image1, setImage1] = useState(null);
  const [fileName1, setFileName1] = useState("No selected file");
  const [image2, setImage2] = useState(null); //변경될 만한 상태일 때 useState 사용
  const [fileName2, setFileName2] = useState("No selected file"); //숫자 2로 사진 구분

  let type = "REMOVEBACKGROUND";
  let username = "string";
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [selectedFile2, setSelectedFile2] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("file2", selectedFile2);
    formData.append("file3", selectedFile);
    formData.append("choiceType", type);
    formData.append("userName", username);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/load/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <form
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={styles.uploadbox}
        >
          {/* <form
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        > */}
          <div
            className={styles.uploaders}
            action=""
            onClick={() => document.querySelector(".inputfield1").click()} //클릭하면 파일탐색기 떠서 사진 선택 가능
          >
            <input
              type="file"
              accept="image/*"
              className="inputfield1"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName1(files[0].name);
                setSelectedFile(files[0]);

                if (files && files.length >= 1) {
                  setImage1(URL.createObjectURL(files[0]));
                  // setImageURL(URL.createObjectURL(files[0]));
                } //참일 때 선택한 사진이 뜸
              }}
            />

            {image1 ? (
              <img className={styles.picture} src={image1} alt={fileName1} />
            ) : (
              <>
                <img
                  className={styles.dropicon}
                  src={UploadPictureIcon}
                  alt={fileName1}
                />
                <p>Upload the files</p>
                <p>here</p>
                <p style={{ fontWeight: "bold" }}>원본 사진 업로드</p>
              </>
            )}
          </div>
          {/*Delete 클릭시 삭제 */}
          <button
            onClick={() => {
              setImage1(null);
              // setImageURL(null);
            }}
          >
            Delete
          </button>
          <button type="submit" value="Upload File">
            Submit
          </button>
          {/* </form> */}
        </div>

        {/* 여기서부터 2번쨰 박스 */}

        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={styles.uploadbox}
        >
          <div
            className={styles.uploaders}
            action=""
            onClick={() => document.querySelector(".inputfield2").click()} //클릭하면 파일탐색기 떠서 사진 선택 가능
          >
            <input
              type="file"
              accept="image/*"
              className="inputfield2"
              hidden
              onChange={({ target: { files } }) => {
                files[0] && setFileName2(files[0].name);
                setSelectedFile2(files[0]);

                if (files && files.length >= 1) {
                  setImage2(URL.createObjectURL(files[0]));
                } //참일 때 선택한 사진이 뜸
              }}
            />

            {image2 ? (
              <img className={styles.picture} src={image2} alt={fileName2} />
            ) : (
              <>
                <img
                  className={styles.dropicon}
                  src={UploadPictureIcon}
                  alt={fileName2}
                />
                <p>Upload the files</p>
                <p>here</p>
                <p style={{ fontWeight: "bold" }}>배경 사진 업로드</p>
              </>
            )}
          </div>
          {/*Delete 클릭시 삭제 */}
          <button
            onClick={() => {
              setImage2(null);
            }}
          >
            Delete
          </button>
          <button type="submit" value="Upload File">
            Upload
          </button>
        </div>
      </form>
    </>
  );
}

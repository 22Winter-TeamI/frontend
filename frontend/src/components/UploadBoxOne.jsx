import React, { useState } from "react";
import axios from "axios";
import styles from "../css/UploadBoxA.module.css";
import UploadPictureIcon from "../images/UploadPictureIcon.svg";

export default function UploadBoxA() {
  const [image1, setImage1] = useState(null); //변경될 만한 상태일 때 useState 사용
  const [fileName1, setFileName1] = useState("No selected file"); //숫자 2로 사진 구분
  //   const [imageURL, setImageURL] = useState(null);

  //   const [username, setUsername] = useState("");
  //   const [image2, setImage2] = useState(null);
  //   const [image3, setImage3] = useState(null);
  let type = "CHANGESTYLE";
  let username = "Kim";

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     // formData.append("username", username);
  //     formData.append("File", image1);
  //     formData.append("File2", image1);
  //     formData.append("File3", image1);
  //     try {
  //       const res = await axios.post(
  //         `http://localhost:8000/load/?type=${type}&userId=${userId}`,
  //         formData
  //       );
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("file2", selectedFile);
    formData.append("file3", selectedFile);
    formData.append("choiceType", type);
    formData.append("string", username);

    try {
      const response = await axios({
        method: "post",
        url: "/api/upload/file",
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
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className={styles.uploadbox}
    >
      <form
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
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
              //   handleFileSelect();
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
          Upload
        </button>
      </form>
    </div>
  );
}

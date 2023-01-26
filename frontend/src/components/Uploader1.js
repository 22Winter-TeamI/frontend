import React, { useState } from "react";
import styles from "../css/Uploader.module.css";
// import {RiImageAddFill} from 'react-icons/ri';

export default function Uploader() {
  const [image1, setImage1] = useState(null); //변경될만한 상태 image1 관리 위한 useState hook & 초기값 null이라 컴포넌트가 처음 *렌더링 될 때 기본적으로 설정될 상태를 지정
  const [fileName1, setFileName1] = useState("No selected file"); //*:화면에 표시할 그래픽 생성
  return (
    <main>
      <div className={styles.bgbox}>
        <imagebox
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
              if (files && files.length >= 1) {
                setImage1(URL.createObjectURL(files[0]));
              } //
            }}
          />
          {/* 이미지 업로드 기능 by 삼항 연산자 (상태 ? 참 실행코드 : 거짓 실행코드) */}
          {
            image1 ? (
              <img src={image1} width={355} height={288} alt={fileName1} />
            ) : (
              // true(=이미지가 업로드된 상태) 이미지 렌더링하는 코드 실행
              <>
                {/* <RiImageAddFill color='#898989' size={70} /> */}
                <p>Drop the files</p>
                <p>here</p>
                <p style={{ fontWeight: "bold" }}>원본 사진 업로드</p>
              </>
            )
            // false(=이미지가 업로드 안된 상태) 이미지 업로드하는 안내문와 아이콘 렌더링하는 코드 실행
          }
        </imagebox>

        <button
          onClick={() => {
            setImage1(null);
          }}
        >
          Delete
        </button>
      </div>
    </main>
  );
}

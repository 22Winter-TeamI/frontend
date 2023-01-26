import React, { useState } from "react";
import styles from "../css/UploadBox.module.css";
import UploadPictureIcon from "../images/UploadPictureIcon.svg"; //추가로 설치한 아이콘 확장 프로그램

export default function Uploader({setImageURL}) {
    const [image1, setImage1] = useState(null) //변경될 만한 상태일 때 useState 사용
    const [fileName1, setFileName1] = useState("No selected file") //숫자 2로 사진 구분
    return (
                <div className={styles.uploadbox}>
                    <uploader action=''
                    onClick={() => document.querySelector(".inputfield1").click()} //클릭하면 파일탐색기 떠서 사진 선택 가능
                    >
                        <input type="file" accept='image/*'className='inputfield1' hidden
                        onChange={({target:{files}})=>{
                            files[0] && setFileName1(files[0].name)
                            if(files && files.length >= 1) {
                                setImage1(URL.createObjectURL(files[0]))
                                setImageURL(URL.createObjectURL(files[0]))
                            }//참일 때 선택한 사진이 뜸
                        }}
                        />

                        {image1 ?
                        <img className={styles.dropicon} src={image1} width={355} height={288} alt={fileName1} />
                        :
                        <>
                        <img className={styles.dropicon} src={UploadPictureIcon} alt={fileName1} />
                        <p>Drop the files</p>
                        <p>here</p>
                        <p style={{fontWeight: 'bold'}}>배경 사진 업로드</p>
                        </>
                    }
                    </uploader>
                        {/*Delete 클릭시 삭제 */}
                        <button onClick={() => { 
                            setImage1(null)
                            setImageURL(null)
                        }}>Delete</button>
                </div> 
    )
}
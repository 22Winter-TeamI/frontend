import React from 'react';
import styles from "../css/DownloadButton.module.css";
// import axios from 'axios'; //연동

function DownloadButton({ imageURL, fileName }) {
    const Download = async () => {
        if (!imageURL) {
            alert("No image uploaded to download");
            return;
        }

        try {
        const response = await fetch(imageURL);
        const fileBlob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createElement(fileBlob);
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        }

        catch (error) {
        console.error (error);
        alert("Error downloading image, Please try again")
        }  
    }

    return (
        <div className={styles.db}>
        <button className={styles.button} onClick={Download}>Download</button>
        </div>
    );
}

export default DownloadButton;
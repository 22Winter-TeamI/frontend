import React, { useState, useEffect } from "react";
import axios from "axios";

function GetResult() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/image/result/string",
          { responseType: "blob" }
        );
        const imageUrl = URL.createObjectURL(new Blob([res.data]));
        setImage(imageUrl);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImage();
  }, []);

  return (
    <>
      {image && (
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.541)",
          }}
          src={image}
          alt="Image from API"
        />
      )}
    </>
  );
}

export default GetResult;

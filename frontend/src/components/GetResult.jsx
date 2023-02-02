import React, { useState, useEffect } from "react";
import axios from "axios";

function GetResult() {
  const [photoUrl, setPhotoUrl] = useState("");
  const getname = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/images/result/${getname}`
        );
        setPhotoUrl(response.data.result_name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {getname}
      {photoUrl && (
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.541)",
          }}
          src={photoUrl}
          alt="Image from API"
        />
      )}
    </>
  );
}

export default GetResult;

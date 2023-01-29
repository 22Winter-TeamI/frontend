import React, { useState } from "react";
import axios from "axios";

function MyComponent() {
  const [username, setUsername] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  let type = "CHANGESTYLE";
  let userId = 1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("username", username);
    formData.append("image1", image1);
    formData.append("image2", image1);
    formData.append("image3", image1);
    try {
      const res = await axios.post(
        `http://localhost:8000/load/?type=${type}&userId=${userId}`,
        formData
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label> */}
      <br />
      <label>
        Image 1:
        <input type="file" onChange={(e) => setImage1(e.target.files[0])} />
      </label>
      <br />
      <label>
        Image 2:
        <input type="file" onChange={(e) => setImage2(e.target.files[0])} />
      </label>
      <br />
      <label>
        Image 3:
        <input type="file" onChange={(e) => setImage3(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyComponent;

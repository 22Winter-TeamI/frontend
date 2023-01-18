import React, { useState } from 'react';
import axios from 'axios';
import './ImageUpload.css';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleChange = e => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('YOUR_SERVER_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploaded && <p>Uploaded!</p>}
      {image && <img src={URL.createObjectURL(image)} alt="uploaded" className="img" />}
    </div>
  );
}

export default ImageUpload;
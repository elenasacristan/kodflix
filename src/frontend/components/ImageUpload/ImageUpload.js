import React, { useState } from "react";
import "./ImageUpload.css";

export default function ImageUpload() {
  const [file, setFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0]

    reader.onloadend = () => {
      setFile(file);
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  let $imagePreview = null;
  if (imagePreview) {
    $imagePreview = <img width="200" src={imagePreview} />;
  } else {
    $imagePreview = (
      <div className="previewText">Please select an Image for Preview</div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit" onClick={handleSubmit}>
          Upload Image
        </button>
      </form>
      <div>{$imagePreview}</div>
    </div>
  );
}

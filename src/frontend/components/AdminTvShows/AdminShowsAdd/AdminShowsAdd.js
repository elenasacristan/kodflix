import React, { useState } from "react";
import "./AdminShowsAdd.css";

export default function AdminShowsAdd() {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [videoId, setVideoId] = useState("");
  const [file, setFile] = useState(null);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSynopsis = (e) => {
    setSynopsis(e.target.value);
  };
  const handleVideoId = (e) => {
    setVideoId(e.target.value);
  };

  const fileChangedHandler = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const formDataImg = new FormData();

    formData.append("id", title.split(" ").join("_"));
    formData.append("title", title.split(" ").join("_"));
    formData.append("synopsis", synopsis);
    formData.append("videoId", videoId);
    formDataImg.append("file", file, title.split(" ").join("_"));

    console.log(formData);
    fetch("/rest/shows/add", {
      method: "POST",
      body: formData,
    });

    fetch("/upload", {
      method: "POST",
      body: formDataImg,
    });
  };

  return (
    <div className="AdminShowsAdd">
      {/* <ImageUpload /> */}
      <h2>Add a new movie</h2>
      <div className="AdminShowsAdd-container">
        <form onSubmit={handleSubmit} className="AdminShowsAdd-form">
          <input
            onChange={handleTitle}
            type="text"
            name="title"
            value={title}
            placeholder="Enter the movie title"
          />
          <textarea
            onChange={handleSynopsis}
            name="synopsis"
            value={synopsis}
            placeholder="Add here the movie synopsis..."
          />
          <input type="file" name="file" onChange={fileChangedHandler}/>
          <input
            onChange={handleVideoId}
            type="text"
            name="videoId"
            value={videoId}
            placeholder="Enter the YouTube video Id"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

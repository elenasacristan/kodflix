import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdminMoviesAdd.css";

export default function AdminMoviesAdd() {
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

  const history = useHistory();

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
    fetch("/rest/movies/add", {
      method: "POST",
      body: formData,
    });

    fetch("/upload", {
      method: "POST",
      body: formDataImg,
    });

    history.push("/");
  };

  return (
    <div className="AdminMoviesAdd">
      <div class="AdminMoviesAdd-container">
        <h2>Add movie</h2>
        <div className="AdminMoviesAdd-form-container">
          <form onSubmit={handleSubmit} className="AdminMoviesAdd-form">
            <input
              onChange={handleTitle}
              type="text"
              name="title"
              value={title}
              placeholder="Enter the movie title"
              required
            />
            <textarea
              onChange={handleSynopsis}
              name="synopsis"
              value={synopsis}
              placeholder="Add here the movie synopsis..."
              required
            />
            <input
              onChange={handleVideoId}
              type="text"
              name="videoId"
              value={videoId}
              placeholder="Enter the YouTube video Id"
              required
            />
            <div className="inputFile">
              Choose Cover File
              <input
                type="file"
                name="file"
                onChange={fileChangedHandler}
                required
              />
            </div>
            <button type="submit">Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
}

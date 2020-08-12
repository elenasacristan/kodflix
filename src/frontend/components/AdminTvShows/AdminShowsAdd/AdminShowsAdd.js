import React, { useState } from "react";
import "./AdminShowsAdd.css";

export default function AdminShowsAdd() {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSynopsis = (e) => {
    setSynopsis(e.target.value);
  };
  const handleVideoId = (e) => {
    setVideoId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("title", title.split(' ').join('_'));
    formData.append("synopsis", synopsis);
    formData.append("videoId", videoId)

    console.log(formData);
    fetch("/rest/shows/add", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="AdminShowsAdd">
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

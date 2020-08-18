import React, { useState, useEffect } from "react";
import "./AdminMoviesEdit.css";
import Spinner from "../../Spiner/Spiner";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function AdminMoviesEdit({ match }) {
  const [movie, setMovie] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [videoId, setVideoId] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch(`/rest/movies/${match.params.movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setResultsLoaded(true);
      });
  }, [match.params.movieId]);

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
    fetch(`/rest/edit/${movie._id}`, {
      method: "PUT",
      body: formData,
    });

    fetch("/upload", {
      method: "POST",
      body: formDataImg,
    });

    history.push(`/admin/movies/list`);
  };

  if (!movie) {
    return <Redirect to="/not-found" />;
  } else if (!resultsLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className="AdminMoviesAdd">
        <div className="AdminMoviesAdd-container">
          <h2>Edit movie</h2>
          <div className="AdminMoviesAdd-form-container">
            <form onSubmit={handleSubmit} className="AdminMoviesAdd-form">
              <input
                onChange={handleTitle}
                type="text"
                name="title"
                value={title}
                placeholder={movie.title}
              />
              <textarea
                onChange={handleSynopsis}
                name="synopsis"
                value={synopsis}
                placeholder={movie.synopsis}
              />
              <input
                onChange={handleVideoId}
                type="text"
                name="videoId"
                value={videoId}
                placeholder={movie.videoId}
              />
              <div className="inputFile">
                Choose Cover File
                <input type="file" name="file" onChange={fileChangedHandler} />
              </div>
              <button type="submit">Update Movie</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

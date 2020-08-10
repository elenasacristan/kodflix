import React,{useState, useEffect} from "react";
import "./Play.css";

export default function Play({ match }) {
  const [tvShow, setTvShow] = useState({});
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    fetch(`/rest/shows/${match.params.TitleTvShow}`)
      .then((response) => response.json())
      .then((data) => {
        setTvShow(data);
        setResultsLoaded(true);
      });
  }, [match.params.TitleTvShow]);

  return (
    <div className="Play">
      <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${tvShow.videoId}`}></iframe>
    </div>
  );
}

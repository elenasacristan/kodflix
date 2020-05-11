import React from "react";
import ozark from "../images/ozark.jpg";
import tigerKing from "../images/tigerking.jpg";
import moneyHeist from "../images/MoneyHeist.jpg";
import got from "../images/got.jpg";
import breakingBad from "../images/breakingbad.jpg";
import narcos from "../images/narcos.jpg";
import TvShow from "../TvShow/TvShow";
import "./GalleryShows.css";

export default function GalleryShows() {
  return (
    <div className="GalleryShows">
      <h1>My Series</h1>
      <div className="container">
        <TvShow title="Ozark" picture={ozark} />
        <TvShow title="Tiger King" picture={tigerKing} />
        <TvShow title="Money Heist" picture={moneyHeist} />
      </div>
      <div className="container">
        <TvShow title="Game of Thrones" picture={got} />
        <TvShow title="Breaking Bad" picture={breakingBad} />
        <TvShow title="Narcos" picture={narcos} />
      </div>
    </div>
  );
}

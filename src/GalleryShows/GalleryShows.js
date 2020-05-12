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
        <TvShow id="Ozark" title="Ozark" picture={ozark} />
        <TvShow id="Tiger_King" title="Tiger King" picture={tigerKing} />
        <TvShow id="Money_Heist" title="Money Heist" picture={moneyHeist} />
        <TvShow id="Game_of_Thrones" title="Game of Thrones" picture={got} />
        <TvShow id="Breaking_Bad" title="Breaking Bad" picture={breakingBad} />
        <TvShow id="Narcos" title="Narcos" picture={narcos} />
      </div>
    </div>
  );
}

import React from "react";
import et from "./images/et.jpg";
import ozark from "./images/ozark.jpg";
import tigerKing from "./images/tigerking.jpg";
import moneyHeist from "./images/MoneyHeist.jpg";
import got from "./images/got.jpg";
import breakingBad from "./images/breakingbad.jpg";
import narcos from "./images/narcos.jpg";
import TvShow from "./components/TvShow";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={et} alt="ET movie" />
      <br /> <br /> <br /> <br />
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

export default App;

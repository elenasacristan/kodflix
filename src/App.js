import React from "react";
import Et from "./images/et.jpg";
import Ozark from "./images/ozark.jpg";
import TigerKing from "./images/tigerking.jpg";
import MoneyHeist from "./images/MoneyHeist.jpg";
import Got from "./images/got.jpg";
import BreakingBad from "./images/breakingbad.jpg";
import Narcos from "./images/narcos.jpg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={Et} alt="ET movie" />
      <br /> <br /> <br /> <br />
      <div className="container">
        <div className="item">
          <img src={Ozark} alt="Ozark cover" />
        </div>
        <div className="item">
          <img src={TigerKing} alt="Tiger King cover" />
        </div>
        <div className="item">
          <img src={MoneyHeist} alt="MoneyHeist cover" />
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src={Got} alt="G.O.T cover" />
        </div>
        <div className="item">
          <img src={BreakingBad} alt="Breaking Bad cover" />
        </div>
        <div className="item">
          <img src={Narcos} alt="Narcos cover" />
        </div>
      </div>
    </div>
  );
}

export default App;

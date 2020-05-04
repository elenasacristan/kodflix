import React from "react";
import ET from "./et.jpg";
import Ozark from "./ozark.jpg";
import TigerKing from "./tigerking.jpg";
import MoneyHeist from "./MoneyHeist.jpg";
import Got from "./got.jpg";
import BreakingBad from "./breakingbad.jpg";
import Narcos from "./narcos.jpg";


import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={ET} alt="ET movie" />
      <br /> <br /> <br /> <br />
      <div className="container">
        <div className="item">
          <img src={Ozark} alt="ET movie" />
        </div>
        <div className="item">
        <img src={TigerKing} alt="ET movie" />
        </div>
        <div className="item">
        <img src={MoneyHeist} alt="ET movie" />
        </div>
      </div>
      <div className="container">
        <div className="item">
        <img src={Got} alt="ET movie" />
        </div>
        <div className="item">
        <img src={BreakingBad} alt="ET movie" />
        </div>
        <div className="item">
        <img src={Narcos} alt="ET movie" />
        </div>
      </div>
    </div>
  );
}

export default App;

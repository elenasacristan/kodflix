import React from "react";
import Spinner from "../../common/images/Spinner.svg";
import './Spiner.css'

export default function Spiner() {
  return (
    <div className="Spinner">
      <img src={Spinner} alt="{this.state.tvShow.title}" />
    </div>
  );
}

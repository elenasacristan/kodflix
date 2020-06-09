import React from "react";
import "./NotFound.css";
import BackButton from "../BackButton/BackButton.js";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="heading">
        Oops! It looks like this page doesn't exist :(
      </h2>
      <BackButton/>
    </div>
  );
}

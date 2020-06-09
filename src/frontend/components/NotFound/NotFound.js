import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import BackButton from "../BackButton/BackButton.js";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="NotFound-heading">
        Oops! It looks like this page doesn't exist :(
      </h2>
      <BackButton/>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2 className="heading">
        Oops! It looks like this page doesn't exist :(
      </h2>
      <Link className="back-button" to="/">
        Back to home page
      </Link>
    </div>
  );
}

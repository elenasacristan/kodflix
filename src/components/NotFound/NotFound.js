import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Oops! It looks like this page doesn't exist :(</h2>
      <Link to="/">Back to home page</Link>
    </>
  );
}

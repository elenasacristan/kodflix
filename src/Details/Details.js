import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  let { id } = useParams();
  return (
    <div>
      <h1>ID: {id}</h1>
      <h2>Hello, this will be the details page for each Movie & TV show :)</h2>
    </div>
  );
}

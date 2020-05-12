import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  
  //useParams access dynamic pieces of the URL
  let { id } = useParams();
  return (
    <div>
      <h1>ID: {id.split('_').join(' ')}</h1>
      <h2>Hello, this will be the details page for each Movie & TV show :)</h2>
    </div>
  );
}

import React from "react";
import "./AdminMovies.css";
import { Link } from "react-router-dom";


export default function AdminMovies() {
  return (
    <div className="AdminMovies">
      <div className="container">
        <Link to="/admin/movies/list">List</Link>
        <Link to="/admin/movies/add">Add</Link>
      </div>
    </div>
  );
}

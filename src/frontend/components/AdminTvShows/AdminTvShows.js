import React from "react";
import "./AdminTvShows.css";
import { Link } from "react-router-dom";


export default function AdminTvShows() {
  return (
    <div className="AdminTvShows">
      <div className="container">
        <Link to="/admin/tv-shows/list">List</Link>
        <Link to="/admin/tv-shows/add">Add</Link>
        <Link to="/admin/tv-shows/edit">Edit</Link>
      </div>
    </div>
  );
}

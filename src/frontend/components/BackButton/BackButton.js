import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

export default function BackButton() {
    return (
        <Link className="back-button" to="/">Back to home page</Link>
    );
}
 



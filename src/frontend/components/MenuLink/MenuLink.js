import React from "react";
import { Link } from "react-router-dom";
import "./MenuLink.css";
import { FaDesktop, FaHome } from "react-icons/fa";

export default function MenuLink({ linkto, text, icon }) {
  return (
    <Link className="MenuLink" to={linkto}>
     {icon === 'fadesktop' && <FaDesktop className="sidebar-icon" />}
     {icon === 'fahome' && <FaHome className="sidebar-icon" />}
     <span className="MenuLink-text">{text}</span>
    </Link>
  );
}

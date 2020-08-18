import React, { useState } from "react";
import "./NavBar.css";
import MenuLink from "../MenuLink/MenuLink.js";
import { MdTheaters } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggle = () => setDisplayMenu(!displayMenu);

  return (
    <>
      <nav className="Navbar">
        <button onClick={toggle} className="Navbar-button">
          <GoThreeBars className="Navbar-hamburguer" />
        </button>
        <Link className="Navbar-logo" to="/">
          <h1 className="heading">
            Kodflix <MdTheaters className="Navbar-icon" />
          </h1>
        </Link>
      </nav>
      <main
        onClick={toggle}
        className={displayMenu ? "NavBar-menu" : "NavBar-menu hide"}
      >
        <MenuLink linkto="/" text="Home" icon="fahome" />
        <MenuLink
          linkto="/admin/movies/list"
          text="Manage Movies"
          icon="admin"
        />
        <MenuLink linkto="/admin/movies/add" text="Add movie" icon="fadesktop" />
      </main>
    </>
  );
}

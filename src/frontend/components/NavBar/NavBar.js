import React, { useState } from "react";
import "./NavBar.css";
import MenuLink from "../MenuLink/MenuLink.js";
import { MdTheaters } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="Navbar">
        <button onClick={toggle} className="Navbar-button">
          <GoThreeBars className="Navbar-hamburguer" />
        </button>
        <h1 className="heading">
          Kodflix <MdTheaters className="Navbar-icon" />
        </h1>
      </nav>
      <main
        onClick={toggle}
        className={showMenu ? "NavBar-menu" : "NavBar-menu hide"}
      >
        <MenuLink linkto="/" text="Home" icon="fahome" />
        <MenuLink
          linkto="/manage/tv-shows"
          text="Manage TV Shows"
          icon="fadesktop"
        />
      </main>
    </>
  );
}

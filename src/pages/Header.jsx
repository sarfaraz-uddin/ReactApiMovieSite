import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import "./header.css";
import Search from "../components/Search";
import Button from "../components/Button";

function Header() {
  return (
    <header>
      <a href="" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign in"
      />
    </header>
  );
}

export default Header;

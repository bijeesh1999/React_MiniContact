import React from "react";
import SearchBar from "./searchBar";
import "../App.css";

function Header(props) {
  return (
    <div id="header">
      <h1>{props.title}</h1>
      <SearchBar />
    </div>
  );
}
export default Header;

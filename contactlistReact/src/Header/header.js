import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../App.css";

function Header() {
  const { contactLengh } = useSelector((state) => state.get);

  return (
    <div id="header">
      <h1>Contact_List</h1>
      <div id="contacts">
        <span className="count" style={{ color: "white" }}>{contactLengh}</span>
        <i className="material-symbols-outlined">contacts_product</i>
      </div>
    </div>
  );
}
export default Header;

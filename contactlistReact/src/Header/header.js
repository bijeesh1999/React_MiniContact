import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import "../App.css";

function Header(props) {

  const {contactLengh}=useSelector((state)=>state.get)

  return (
    <div id="header">
      <h1>{props.title}</h1>
      <span style={{color:"white"}}>{contactLengh}</span>
    </div>
  );
}
export default Header;

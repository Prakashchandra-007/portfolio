import React from "react";
import './header.css';
// import ToggleButton from './Toggle/Toggle';
function MenuList() {
  return (
    <div className="header-list">
      <h1>&lt; Prakash/ &gt;</h1>
      <div className="menus" >
        <a href="/">Home</a>
        <a href="/">Resume</a>
        <a href="/">My Projects</a>
        <a href="/">Contact</a>
        {/* <ToggleButton /> */}
      </div>
    </div>
  );
}
export default MenuList;

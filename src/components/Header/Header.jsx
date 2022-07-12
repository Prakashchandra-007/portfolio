import React, { useState } from "react";
import MenuList from "./MenuList";
import './header.css';
function Header(){
    
    return(
        <div className="header">
            <MenuList />
        </div>
    )
}

export default Header;
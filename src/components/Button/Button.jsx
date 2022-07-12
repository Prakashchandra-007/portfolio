import React from 'react';
import './button.css';
function Button({bcolor,color,name}){
    return (
        <button style={{backgroundColor:`${bcolor}`,color:`${color}`} } className="hot-button" id={name} name={name} >{name}</button>
    )
}

export default Button;
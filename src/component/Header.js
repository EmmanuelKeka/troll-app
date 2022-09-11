import React from "react";
import appIcon from "../images/troll-face.png"
function Header (){
    return(
        <header>
            <div className="logoDiv">
                <img src={appIcon} className ="app--icon"/>
                <h2 className="app--icon--text">Meme Generator</h2>
            </div>
            <p className="title--text">React Course - Project 3</p>
        </header>
    )
}

export default Header;
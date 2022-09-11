import React from "react";
function Form (props){
    function makework(){
        props.UpdateMeme("yes","no")
    }
        return(
        < div className="Meme--form">
            <div className="input--box">
                <input id="upText" type="text" className="meme--input" placeholder="First Text"/>
                <input id="BottomText" type="text"className="meme--input" placeholder="Second Text"/>
            </div>
            <button className="submit--button" onClick={makework}>Get a new meme image</button>
        </div >
    )
}

export default Form;
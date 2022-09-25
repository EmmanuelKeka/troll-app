import React from "react";
import Form from "./Form";
import MemeData from "../data/MemeData";
function Meme (){
    let [meme,setMeme] = React.useState({
        toptext: "",
        buttomText: "",
        image: ""});
    return(
        <main className="main--box">
            <Form 
            MemeData = {MemeData}
            setMeme = {setMeme}
            />
            <img src={meme.image}className="meme--image"/>
        </main>
    )
}

export default Meme;
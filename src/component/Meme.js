import React from "react";
import Form from "./Form";
import MemeData from "../data/MemeData";
function Meme (){
    let [meme,setMemeImage] = React.useState({
        toptext: "",
        buttomText: "",
        image: ""});
    function UpdateMeme(upText,buttonText){
        console.log(upText)
        console.log(buttonText)
        let memesArray = MemeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage({
            image: memesArray[randomNumber].url
        })
    }
    return(
        <main className="main--box">
            <Form UpdateMeme = {UpdateMeme}/>
            <img src={meme.image} className="meme--image"/>
        </main>
    )
}

export default Meme;
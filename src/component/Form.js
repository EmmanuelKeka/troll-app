import React from "react";
function Form (props){
    let [uptext,setUptext] = React.useState("");
    let [bottomtext,setbottpmtext] = React.useState("");

    function UpdateMeme(event){
        let memesArray = props.MemeData.data.memes;
        const {name, value, type, checked} = event.target
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        props.setMeme(preV=>{
            return( {
                ...preV,
                image: memesArray[randomNumber].url,
                [name]: value
            })
        })
        console.log(value)
    }

        return(
        < div className="Meme--form">
            <div className="input--box">
                <input id="upText" type="text" className="meme--input" placeholder="First Text" onChange={UpdateMeme} name="toptext"/>
                <input id="BottomText" type="text"className="meme--input" placeholder="Second Text" onChange={UpdateMeme} name="buttomText"/>
            </div>
            <button className="submit--button" onClick={UpdateMeme}>Get a new meme image</button>
        </div >
    )
}

export default Form;
import React, { useState } from "react";
import './cool.css'

export const StatedFunc = (props) =>{
    const [textValue, textUpdate] = useState(0)

    const handleClick =()=>{
        textUpdate(textValue+1)
    }

    const [inputText, updateText] = useState("") //useState=default value

    const handleInput=(typed)=>{
        updateText(typed.target.value) ////////Check this line of code
    }

    return(
        <div>
            <span className="bigLetters">Is this even working aynmore</span>
            <br/>
            <div style={{textAlign:"center"}}>
            <button onClick={handleClick}>Click me</button>
            <input placeholder="say Something" onChange={handleInput}></input>
            <p>
                you've clicked the button {textValue} times!
            </p>
            <span>you are typing</span>
            <p>{inputText}</p>
            </div>
            
        </div>
    )
}


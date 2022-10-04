import React,{ useEffect, useState } from "react";


export const Convo=()=>{

    const [text,updateText]=useState("...")
    useEffect(
        ()=>{
            setInterval(
                ()=>{
                    updateText("You are right..")
                },2000
            )
        },[]
    )
    return(
        <div>
            <p style={{marginLeft:"30%"}}>
                This is not the end
            </p>
            <p style={{
                fontWeight:"bold",
                textAlign:"center"}}>
                {text}
            </p>
        </div>
    )
}


export const Component20=()=>{
    const [visible,isVisible] = useState(true)
    const [tooShort, isTooShort]= useState(false)
    const [query, updateQuery]= useState("")
    
    useEffect(()=>{
        isTooShort(query.length<6)
    })

    return(
        <div>
            <div>
                <p>This is Component20</p>
                <p>funny? Isn't it?</p>
                <p> This will exist only for a fraction of universe's setTimeout</p>
                <button onClick={()=>{isVisible(!visible)}}>Hide Timer</button>
                //prevent memory leaks when uneeded

                <br/>
                {
                    visible &&
                    <Timer />
                }

                <input value={query} placeholder="Input" onChange={(event)=>{updateQuery(event.target.value)}}>
                
                </input>
                <span>
                {query}
                </span>
                {
                    tooShort &&
                    <p style={{color:"red"}}> your password is too short </p> 
                }
            </div>
        </div>
    )
}

export const Timer = ()=>{
        
    const [currentTime, setTime] = useState(0)
    useEffect(
        ()=>{
            const timer =setInterval(
                () => {
                        let date = new Date();
                        setTime(date.toLocaleTimeString());
                    },1000
                )
            return()=>{
                clearInterval(timer)
            }
        },[]
    );
        
    return(
        <div>
            <p style={{color:"red"}}>anyways your current time is <b>{currentTime}</b></p> 
            <p> is this {currentTime[6]+currentTime[7]}</p>
        </div>
    )

}
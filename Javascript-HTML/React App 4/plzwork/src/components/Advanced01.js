import { useEffect, useState } from "react";
import React from "react";
import "./loading.css" 


export const Section01 = () => {


    let text=""
    const [condition,updateCondition]=useState(false)
    
    if (condition){
        text=<p>Condition is <b>true!</b></p>

    }
    else{text=<p>Condition is <b>not true!</b></p>}
    return(
        <div>
            {
                <LoadingScreen/>
                
            }
            <div>
                <p>{text}</p>
                <button onClick={()=>{updateCondition(!condition)}}>OR IS IT</button>
            </div>
        </div>
    )
}

export const LoadingScreen = () => {
    const [load,updateLoad]=useState(1)
    const [barpoint,updateBar]=useState(1)


    useEffect(
        ()=>{
            const loading=setInterval(
                ()=>{
                if (load <=7){updateLoad(load+1)
                if (barpoint<4){
                    updateBar(barpoint+1)
                }
                else(updateBar(1))    
            }
                
                },
                125
            )
               return()=>{
             clearInterval(loading)
            }
        },[load]
        )
    if (load<=7){
    return(
        <div>
            
            <div className="loadingBack">

            <div className={"loading"+barpoint+" border"}></div>
            <div className={"loading"+barpoint+" border"}></div>
            <div className={"loading"+barpoint+" border"}></div>
            <br/>
            <span className="coolText">
                please wait while page is loading..
            </span>
            <br/>
            <div className={"loading"+barpoint+" border"}></div>
            <div className={"loading"+barpoint+" border"}></div>
            <div className={"loading"+barpoint+" border"}></div>

            

            </div>
            
        </div>
    )
}
}

export const TernaryOperators = () =>{
    
    let outMessage="hello world"

    let number = 2
    let result = (number>5)
    ? outMessage="the world is cruel"
    : outMessage="you are a potate Jason"
    
    return(
        <div>
            <p>hello world {outMessage} </p>
        </div>
    )
}
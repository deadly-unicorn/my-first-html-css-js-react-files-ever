import React from "react";
import "./cool.css"

const styles={
    rotatingEffect:{
        transform: "rotate(90deg)",

       
    },
    restEffect:{
        backgroundColor:"blue",
        height:"min-content"
    }
}


export class Colourful extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div style={
                    {
                    backgroundColor:"orange",
                    height:"400px",
                    justifyContent:"center",
                    alignItems:"center",
                    display:"flex"
                    }
                }>
                    <span style={
                        {...styles.rotatingEffect,...styles.restEffect,fontWeight:"Bold"}
                        
                    }
                    className="potato"
                    >
                    
                        
                        hello world!
                    </span>
                </div>
            </div>
        )
    }
}
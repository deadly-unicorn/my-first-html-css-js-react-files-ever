import React, {useState, useEffect} from "react";


///hooks and useEffect

export const LessonComp = () => {

    const [multiplication, setMult] = useState(0)
    const [division, setDiv] = useState(0)
    const [count, setCount] = useState(1)
    const [multiplicant,setMulti] = useState(0)
    const [characters,setChar] = useState("")
    const [passwordBox, setPassBox] = useState("")
    const [pass, setPass] = useState("")

    
   useEffect( ()=>{
    setTimeout(
        ()=>{
            setCount(count+1)
        },4000
        )
    }
        )
   //     
       useEffect(
            ()=>{
            if (multiplicant!=0){ ///now it won't do calculations if multiplicant is 0
                setMult(count*multiplicant)
            }


            }
        )
   //     
   //     
        useEffect(
            ()=>{
            setDiv((count/0.5))
            
        },[count,multiplication]
        ///by adding this empty array our useEffect renders just once
        ////that's called a dependency array
        ///if we add a value, like "count"
        ///it will update whenever the value updates.
        //by adding a second variable to the array, it updates whenever one of them
        //updates
        )

        useEffect(
            ()=>{
            if (characters.length>10){
                setChar(characters)
                setPassBox("Your password is too long!")
            }
            else{
                setPass(characters)
                setPassBox("")
            }
        }
        )



        return(
            <div>
                <div>
                    <p>
                        hello! you have been in this website for {count} seconds
                    </p>
                        <br/>
                        <span>consider doing this {count}x{multiplicant}= {multiplication}</span>
                        <p>
                            and afterwards this {count}/0.5= {division} 
                        </p>
                        <span>by what you want to multiply</span>
                        <input placeholder="hello world" value={multiplicant} onChange={(event)=>{setMulti(event.target.value)}}></input>
                        <p>
                            type a 10 character long password
                        </p>
                        <input type="password" value={pass} onChange={(event)=>{(setChar(event.target.value))}} ></input> <span style={{color:"red"}}>{passwordBox}</span>
                    <p>{pass}</p>
                </div>
            </div>
        )

}
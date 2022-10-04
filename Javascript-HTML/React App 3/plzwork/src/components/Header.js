import React, { useState } from "react";
import "./styling01.css"
import "./nav.css"


const imgUrl="https://cdn-icons-png.flaticon.com/512/56/56763.png?w=740&t=st=1662909719~exp=1662910319~hmac=6a39f3dc4a0b826c824708387bdeca3e8c653460b074a53f3941596edf559492://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8af7fbe5-2f76-4aa6-9982-1be6f88160fe/d4uoa2k-d75058da-72cb-446c-af38-dd0de4d8f7a8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhZjdmYmU1LTJmNzYtNGFhNi05OTgyLTFiZTZmODgxNjBmZVwvZDR1b2Eyay1kNzUwNThkYS03MmNiLTQ0NmMtYWYzOC1kZDBkZTRkOGY3YTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iZzxXy0gHRbUaeOjKasJ2TZhQa5DjcY5Gp8gbpU6Ku4"

    export const Header00 = () =>{
    
        const [active, activator] = useState(0)
        
        const navClick =()=>{
            if (active==0){
            activator(active+1)
            }
            else{
                activator(0)
            }
        }

        const NavBar=()=>{

            if (active==1){
                return(
                NavBar00()
            )
            }
            }

    return(
        <div>
            <div className="backgroundHead borderThing flexDisp">
                <div className="borderThing flexItem">
                    <button className="buttCont" onClick={navClick}>
                    <a href="#" className="navA">
                    <img src={imgUrl} className="minCont imgClick"/>

                    </a>
                    </button>
                </div>
                <div className="borderThing alignCenter flexItem">
                    <span className="textColour">
                    Welcome to our webpage!
                    </span>
                </div>
                <div className="borderThing alignRight flexItem">
                    <span className="textColour">
                    go online!
                    </span>
                </div>
            </div>
            {NavBar()}

        </div>
    )
}


export const NavBar00 = () => {
        return(
            <div className="borderThing flexDispCol navBar onTop">
    <div className=" flexDispCol navBar absPos"></div>
        <div className=" navCenter">
            <button className="navBarButt" >
            <a href="#" className="navA">
                Homepage
            </a>
            </button>
        </div>
        <div className=" navCenter">
            <button className="navBarButt" >
            <a href="#" className="navA">

                Rage
            </a>
            </button>
        </div>
        <div className=" navCenter">
            <button className="navBarButt" >
            <a href="#" className="navA">

                Okay
            </a>
            </button>
        </div>
    </div>
        )
    
}

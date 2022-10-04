import React from "react";

class Checklist extends React.Component{
    constructor(procs){
        super(procs)
        this.entry="empty"
        this.submit={counter:0}
        this.state={count:0}
    }

    componentDidMount(){
        this.setState({
            text:0
        })
    }
    handleInput = (event) => {
        const val= event.target.value
        this.setState({
            text:val
        })
    }



    rangeIncrease = ()=>
        {
            const val= this.state.text
            if (val<100){this.setState({
                text:(Number(val)+1)
        })
    }
    }

    rangeDerease = ()=>
    {
        const val= this.state.text
        if (val>0){this.setState({
            text:(Number(val)-1)
    })
}
    }
    reset=()=>{
        this.setState({
            text:0})
        }

    

    update(){}
    render(){
        return(
            <div>
                <button onClick={this.rangeDerease}> -</button>
                <input placeholder="hello" type={"range"} value={this.state.text}  onChange={this.handleInput}/>
                <button onClick={this.rangeIncrease}>+</button>
                <p>{this.state.text} a</p>
                <span>{"val"}</span>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Checklist
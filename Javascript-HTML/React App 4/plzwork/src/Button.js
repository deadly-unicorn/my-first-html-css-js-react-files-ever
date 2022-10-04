import React from "react";


let imageList = ["https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png","https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9","https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"]


class Butt extends React.Component {
    constructor(props){
        super(props);
        this.state= {imagenumber:0}; ///state must be called 'state'
    }

    componentDidMount(){
        this.setState(
            {imagenumber:0}
        );
    }
    updateCounter=()=>{
        this.setState(
            {imagenumber:this.state.imagenumber+1}
            );
    }

    checkCounter=()=>{
        if (this.state.imagenumber<3){return imageList[this.state.imagenumber]}
        else{
            this.state.imagenumber=0
            return imageList[this.state.imagenumber]}
    }

    render (){
        return (
            <div>
                <h1>hi </h1>
                <button onClick={this.updateCounter}>hi {this.state.imagenumber} </button>
                <br />
                <img src={
                    this.checkCounter()
                    } alt="empty" height="400px" width="400px" />
            </div>
    );
    }
}

export default  Butt;

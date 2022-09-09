import React from "react";

class Component2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Hello {this.props.name} sir again!! </h1>
        )
    }
};

export default Component2;
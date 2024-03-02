import React,{Component} from "react";

//props using class component
//for class we use this keyword
class PropClass extends Component{
    render(){
        return <h1>Hello I am {this.props.name} {this.props.lastName}, I am learning React</h1>
    }
}
export default PropClass
import React,{Component} from "react";
import ChildC from "./ChildC-17";

class ParentC extends Component {
    
    constructor(){
        super()
        this.state={
            parentName:"Abhishek"
        }

        this.greetParent = this.greetParent.bind(this)
    }


    greetParent(){
        alert(`Hello ${this.state.parentName}`)

    }
    

    render(){
        return(
            <div>
                <h1>Writing function in parent class and passing as property to child class</h1>
                <h2>Only parent class is render in app.js</h2>
                <ChildC greetAlert = {this.greetParent}></ChildC>
            </div>
        )
    }
}

export default ParentC

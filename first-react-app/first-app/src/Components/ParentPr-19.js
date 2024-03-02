import React,{Component} from "react";
import ChildCr from "./ChildCr-18";


class ParentPr extends Component{
    constructor(){
        super()
        this.state={
            parentName:"Abhishek"
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(x){
        alert(`${this.state.parentName} ${x}`)

    }

    render(){
        return(
            <div>
                <h1>Passing a parameter to greetHandler from child</h1>
                <ChildCr greetHandler = {this.greetParent}></ChildCr>
            </div>
        )
    }
}

export default ParentPr
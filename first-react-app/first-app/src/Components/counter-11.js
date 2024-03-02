import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }

    // increment(){
    //     this.state = {
    //         counter:this.state.counter +1
    //     }
    // }

    increment(){
        this.setState({
            counter:this.state.counter +1
        },()=>{
            console.log(this.state.counter)
        })

        //when we print here it will give incorrect output on console
        //console.log(this.state.counter)
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>this.increment()}>Increase</button>
            </div>
        )
    }
}

export default Counter
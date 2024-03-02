import React,{Component} from "react";


class Counter2 extends Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment(){
        this.setState((pre)=>({
            count:pre.count + 1
        }))


        //will increment but not show on ui we need to render
        // this.state.count = this.state.count +1
        // console.log(this.state.count)

        // this.setState({
        //     count:this.state.count +1 
        // },()=>{
        //     console.log(this.state.count)
        // })

        // console.log(this.state.count)
    }

    incrementSix(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.incrementSix()}>Incremen Count</button>
            </div>
        )

    }
}

export default Counter2
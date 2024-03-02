import React,{Component} from "react";

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello...!"
        }
        //this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Good Bye...!"
    //     })
    //     // console.log(this)
    // }

    clickHandler = ()=>{
        this.setState({
            message:"Good Bye......!"
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={()=>this.clickHandler()}>On Click</button> */}
                {/* <button onClick={this.clickHandler}>On Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}>On Click</button> */}
                <button onClick={this.clickHandler}>On Click</button>
            </div>
        )
    }
}

export default EventBind
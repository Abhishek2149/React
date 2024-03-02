import React ,{Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:"Welcome...!"
        }
    }

    // changeMessage(){
        //this will not work
    //     this.state = {
    //         message:"Welcome Abhishek...!"
    //     }
    // }

    changeMessage(){
        //we need to use setState method
            this.setState({
                message:"Welcome Abhishek...!"
            })
    }

    dblMessage(){
        this.setState({
            message:"Good Bye Abhishek...!"
        })
    }

    hover(){
        this.setState({
            message:"Welcome Abhishek Jaybhaye.....!"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()} onDoubleClick={()=>this.dblMessage()} onAuxClick={()=>this.hover()}>ChangeMessage</button>
            </div>
        )
    }
}


export default Message


import React,{Component} from "react";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            userName : "",
            comments : "",
            topic : "React"
        }
    }
    handleUserName = (event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    handleComment = (event) =>{
        this.setState({
            comments:event.target.value
        })
    } 

    handleTopic = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert (`${this.state.topic} ${this.state.userName} ${this.state.comments}`)
        event.ppreventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        value={this.state.userName}
                        onChange={this.handleUserName}
                    />
                </div>
                <h1></h1>
                <h1></h1>
                <div>
                    <label>Comment</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleComment}
                    />
                </div>
                <h1></h1>
                <h1></h1>
                <div>
                    <label>Select Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="cypress">Cypress</option>
                        <option value="java">Java</option>
                        <option value="playwright">PlayWright</option>
                    </select>
                </div>
                <h1></h1>
                <h1></h1>
                <button type="submit">Submit Form</button>
            </form>
        )
    }
}
export default Form
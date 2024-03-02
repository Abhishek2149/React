import React, { Component } from "react";

class UserGretting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }


    //if-else 
    // render(){
    //     if(this.state.isLoggedIn){
    //         return <div>Welcome Abhishek...!</div>
    //     }
    //     else{
    //         return <div>You are not logged in, Pleas Login...!</div>
    //     }
    // }

    //element variable 
    // render() {
    //     let message = undefined
    //     if (this.state.isLoggedIn) {
    //        message = <div>Welcome Abhishek...!</div>
    //     }
    //     else {
    //         message = <div>You are not logged in, Pleas Login...!</div>
    //     }
    //     return <div>{message}</div>
    // }



    //ternary operator
    // render(){
    //     return this.state.isLoggedIn?<div>Welcome Abhishek...!</div>:<div>You are not logged in, Pleas Login...!</div>
    // }


    //short circuit
    render(){
        return this.state.isLoggedIn && <div>Welcome Abhishek...!</div>
    }



    // render() {
    //     return(
    //     <div>
    //         <h1>Welcome Abhishek...!</h1>
    //         <h1>You are not logged in, Pleas Login...!</h1>
    //     </div>
    // )}
}

export default UserGretting
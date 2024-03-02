import React from "react";


//passing properties recived from App.js to function greet
const Greet=(props)=>{
    //reading properties sent from App.js 
    return <h1>Hello {props.name} {props.lastName}</h1>
}

export default Greet
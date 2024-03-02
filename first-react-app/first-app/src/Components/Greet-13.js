import React from "react";


function Greet2(props){
    let {name,lastName,Message} = props
    return(
        <div>
            <h1>{Message} {name} {lastName}.</h1>
        </div>
    )
}

export default Greet2
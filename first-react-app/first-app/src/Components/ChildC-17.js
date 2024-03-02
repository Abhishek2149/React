import React from "react";

let ChildC = (props)=>{
    return(
        <div>
            <button onClick={()=>props.greetAlert()}>Greet</button>
        </div>
    )
}


export default ChildC
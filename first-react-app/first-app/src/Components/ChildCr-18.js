import React from "react";

let ChildCr = function(props){
    return(
        <button onClick={()=>props.greetHandler("Hello...!")}>Greet Button</button>
    )
}
export default ChildCr
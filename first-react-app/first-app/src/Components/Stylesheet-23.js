//
//CSS style
//Inline style
//CSS modules

import React from "react";
import './Style-23.css'
function Stylesheet(props){
    // console.log(props.name)
    let className = props.name === "one"?"one":"two"
    return(
        <div>
            <h1 className={`${className} three`}>Style Sheet</h1>
        </div>
    )
}

export default Stylesheet
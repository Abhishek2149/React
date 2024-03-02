import React from "react";
import './StyleR-26.css'

function StylesheetR(props){

    let className = props.class === "oneR"?"oneR":"twoR"

    return(
        <div>
            <h1 className={`${className} threeR`}>CSS Stylesheet Revision</h1>
        </div>
    )
}

export default StylesheetR
import React from "react";
import style from './appStyle-25.module.css'
const heading = {
    fontSize:"60px",
    color:"blue",
    border:"1px solid orange"
}


function Inline(){
    return(
        <div>
            <h1 style={heading}>Another Inline Component</h1>
            <h1 className="red">Another Inline Component class red accessible</h1>
            {/* 
            this will not allowd so it prvent overlapping so we have to use modules
            to use this we need to import module
            <h1 className="green">Another Inline Component</h1> 
            */}
            <h1 className={style.green}>Another Inline Component--</h1> 
        </div>
    )
}

export default Inline
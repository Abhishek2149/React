import React from "react";


//JSX javascript xml
const JSXRevision =() =>{
    // return(
    //     <div className="jsx_class" >
    //         <h1 id="jsx_id">Hello JSX revision</h1>
    //     </div>
    // )

    return React.createElement('div',{className:"jsx-class"},
        React.createElement('h1',{id:"jsx-id"},"Hello React.create")
    )
}

export default JSXRevision
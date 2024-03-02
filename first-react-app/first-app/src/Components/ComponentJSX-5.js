import React from "react";


const ComponentJSX = () =>{
    //creating normal element without atributes and values
    // return(
    //     <div>
    //         <h1>Hello Abhishek</h1>
    //     </div>
    // )




    //creating elements using inbuilt method
    //with atributes and values
    return React.createElement('div',{id:'Hello',className:'JSXComponent'},
        React.createElement('h1',null,"Hello Abhishek")
    )
}

export default ComponentJSX
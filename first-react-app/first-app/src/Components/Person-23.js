import React from "react";


function Person({person}){

    return(
        <div>
            <p>My first name is {person.firstName}, my last name is {person.lastName}, my is id {person.id} and my roll no is {person.rollNo}</p>
        </div>
    )
}
export default Person
import React from "react";
import { name } from "tar/lib/types";

function NameList(){

    //metod 1 manualy
    let names = ["Abhishek","Akash","Vikas","Vishal"]
    // return(
    //     <div>
    //         <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1>
    //         <h1>{names[3]}</h1>
    //     </div>
    // )

    //method 2 direct map 
    // return(
    //     <div>{names.map(name => <h1>{name}</h1>)}</div>
    // )

    //method 3 map and store in variable
    // let name_map = names.map(name =><h1>{name}</h1>)
    // return(<div>{name_map}</div>)

    //array of object
    const persons = [
        {
            firstName:"Abhishek",
            lastName:"Jaybhaye"
        },
        {
            firstName:"Akash",
            lastName:"Shirsath"
        },
        {
            firstName:"Vikas",
            lastName:"Mandlik"
        },
        {
            firstName:"Vishal",
            lastName:"Kadlag"
        }
    ]

    let person_List = persons.map(person=><h1>My first name is {person.firstName} and my last name is {person.lastName}</h1>)
    return(
        <div>
            {person_List}
        </div>
    )

}

export default NameList
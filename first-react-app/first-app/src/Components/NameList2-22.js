import React from "react";


function NameList2(){
    // let names = ["Abhishek","Swaraj","Ashitosh","Rohan"]
    // let list = names.map((names)=><h1>{names}</h1>)

    // return(
    //     // <div>
    //     //     <h1>{names[0]}</h1>
    //     //     <h1>{names[1]}</h1>
    //     //     <h1>{names[2]}</h1>
    //     //     <h1>{names[3]}</h1>
    //     // </div>


    //     // names.map((names)=><h1>{names}</h1>)
    //     <div>
    //         {list}
    //     </div>
    // )


    let Person_List = [
        {
            id:1,
            firstName:"Abhishek",
            lastName:"Jaybhaye",
            rollNo:45
        },
        {
            id:2,
            firstName:"Akash",
            lastName:"Shrsath",
            rollNo:65
        },
        {
            id:3,
            firstName:"Rohan",
            lastName:"Jundare",
            rollNo:67
        },
        {
            id:4,
            firstName:"Vishal",
            lastName:"Kadlag",
            rollNo:74
        }
    ]

    Person_List = Person_List.map((person)=><p>My first name is {person.firstName}, my last name is {person.lastName}, my is id {person.id} and my roll no is {person.rollNo}</p>)

    return(
        <div>
            <h1>{Person_List}</h1>
        </div>
    )

}

export default NameList2
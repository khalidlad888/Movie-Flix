// import React from "react";

// class Student extends React.Component{
//     render(){
//         const {stuname, marks} = this.props
//         return(
//             <>
//                 <h3>Hello, {stuname}</h3>
//                 <p>You have secured {marks}%</p>
//                 <hr/>
//             </>
//         )
//     }
// }


function Student (props){
    const {stuname, marks} = props
    return(
        <>
            <h3>Hello, {stuname}</h3>
            <p>You have secured {marks}%</p>
            <hr/>
        </>
    )
}

export default Student;
import React from 'react'

//js above return { } {{ }} inline style double
//rfec 
function Header(props) {
    //js
    return (
        <div className="Class-header">
            <h1 className="class-header-tittle">This is your routine for the day!</h1>
            <h2 className="class-header-tittle">You have {props.numTodos} tasks to do!</h2>
            <h3 className="class-header-tittle">When you're done, feel free to add more to your needs</h3>
        </div>
    )
}

export default Header
// import React from 'react'
// function Header(props) {
//     const name= "April"; 
//     const date= new Date();
//     const hours= date.getHours();
//     const minutes= date.getMinutes(); 
//     return (
//         <div className= "card-header">
//             <h1 className="card-header-title header">You have {props.numTodos} Tasks to Do </h1>
//             <h2> Hello {name} It is currently {hours % 12} : {minutes}</h2>
//         </div>
//     )
// }
// export default Header


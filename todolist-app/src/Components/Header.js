import React from 'react'


//js above return { } {{ }} inline style double
//rfec 
function Header(props) {
    //js
    return (
        <div className="Class-header">
            <h1 className="class-header-tittle">You have {props.numTodo} tasks to do!</h1>
        </div>
    )
}

export default Header

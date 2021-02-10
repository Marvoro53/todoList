import React from 'react'

const TodoList=(props) => {
    //access to the todos we will pass and pass tasks as props
    const todos= props.tasks.map((todo, index) => {
        //when use .map unique key, pass index as parameters 
        return <Todo content={todo} key={index} id={index} />
    })
    return (
        <div className="list-wrapper">
            {todos} 
        </div>
    );
}
//displays the content of the task string
const Todo=(props) =>{
    return(
        <div className="list-item">
            {props.content}
            <button class = "delete" onClick= {() => {props.onDelete(props.id)}}> X </button>
        </div>
    )
}
export default TodoList;

import React, { Component } from 'react';
import "./Styles/Style.css"
import Header from "./Components/Header"; 
import Todos from "./Components/Todos"; 
import Submit from "./Components/Submit"; 
import Widgets from "./Components/Widgets";

class App extends Component {
  state = {
    tasks: ['Morning run' , 'Breakfast' , 'Work' ,"Walk the dog" , "Exercise", 'Eat', 'Read a book', "Sleep"]
  };
  //the function copies the content of the old task array and adds a new task as well.
  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }
  
  //the delete button //removes an element form the tasks array
  handleDelete = (index) => {
    const newArr= [...this.state.tasks];
    newArr.splice(index, 1); 
    this.setState({tasks: newArr}); 
  }
  render() {
    return(
      <>
      <Widgets />
      <div className='wrapper'>
        <div className='card frame'>
          <Header numTodos={this.state.tasks.length} />
          <Todos tasks={this.state.tasks} onDelete={this.handleDelete} />
          <Submit onFormSubmit={this.handleSubmit} />
        </div>
      </div>
      </>
    );
  } 
}
export default App;
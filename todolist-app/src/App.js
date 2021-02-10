import React, {Component} from "react";
import "./Styles/Style.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos"
//ctrl space

class App extends Component{
  state ={
    tasks:["Task 1", "Task 2", "Task 3"]
  };
//delete button
  handleDelete =(index) => {
    const newArr= [...this.state.tasks]
    newArr.splice(index,1);
    this.setState({tasks: newArr});
  }

  render(){
    return(
      <div className="wrapper">
        <div className="card-frame">
          <Header numTodos={this.state.tasks.length} />
          <Todos tasks={this.state.tasks} onDelete={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default App;

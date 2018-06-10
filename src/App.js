import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTask from "./Components/AddTask";
import Tasks from './Components/Tasks';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks:  [
        {title: 'Test', body: 'Test body'},
        {title: 'Test', body: 'Test body'},
        {title: 'Test', body: 'Test body'},
        {title: 'Test', body: 'Test body'},
      ]
    };
    this.addTask = this.addTask.bind(this);
  }

  delete(title) {
    const index = this.state.tasks.findIndex(e => e.title === title)
    const newTasks = this.state.tasks.splice(index,1);
    this.setState({state: newTasks}); 
  }

  addTask(task) {
    const newTasks = this.state.tasks.slice();
    newTasks.push(task);
    this.setState({tasks: newTasks});
  }

  render() {
    return (
      <div>
        <h1 className="display-1 text-primary text-center ">TO-DO App</h1>
        <AddTask addTask={this.addTask}/>
        <br />
        <Tasks 
          tasks={this.state.tasks}
          delete={this.delete.bind(this)}/>
      </div>
    );
  }
}

export default App;

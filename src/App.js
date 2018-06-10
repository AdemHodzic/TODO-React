import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddTask from "./Components/AddTask";
import Tasks from './Components/Tasks';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {title:'Test0', body:'Tests bo0dy'},
        {title:'Test1', body:'Tests1 body'},
        {title:'Test2', body:'Tests 2body'},
        {title:'Test3', body:'Tests b3ody'},
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
        <AddTask addTask={this.addTask}/>
        <Tasks 
          tasks={this.state.tasks}
          delete={this.delete.bind(this)}/>
      </div>
    );
  }
}

export default App;

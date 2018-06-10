import React, { Component } from 'react';

import Task from './Task';

import styles from '../Styles/Tasks.css';

class Tasks extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const tasks = this.props.tasks.map( (e) => {
            return (
                <Task 
                    key={e.title}
                    title={e.title} 
                    body={e.body} 
                    handleClick={this.props.delete.bind(this)}/>
            )
        })
        return (
            <div>
                {tasks}
            </div>
        );
    }
}

export default Tasks;

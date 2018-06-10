import React, { Component } from 'react';

import Task from './Task';


class Tasks extends Component {

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

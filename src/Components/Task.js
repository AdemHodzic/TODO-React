import React from 'react';

import styles from '../Styles/Tasks.css';

const Task = (props) => {
    return (
        <div  style={styles.div}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <button className="btn btn-outline-danger" onClick={props.handleClick.bind(this, props.title)}>Delete</button>
        </div>
    );
}

export default Task;

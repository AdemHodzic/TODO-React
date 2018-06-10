import React, { Component } from 'react';

class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        const stateProp = e.target.name;
        console.log(stateProp)
        this.setState({ [stateProp]: e.target.value});
    }

    submit(e) {
        e.preventDefault();
        if (this.state.title && this.state.body) {
            this.props.addTask(this.state);
            this.setState({title:'',body:''});        
        }
    }

    render() {
        return (
            <div>
                <h1>Add Tasks</h1>
                <form onSubmit={this.submit}>
                    <div>
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={this.state.title} 
                            name="title" 
                            onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Body</label>
                        <input 
                            type="text" 
                            value={this.state.body} 
                            name="body" 
                            onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-outline-success">Add Task</button>
                </form>
                <hr />
            </div>
        );
    }
}

export default AddTask;

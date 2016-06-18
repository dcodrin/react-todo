import React from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from 'actions';

export class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {todoText: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({todoText: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        const {dispatch} = this.props;
        if(this.state.todoText.length > 0) {
            dispatch(startAddTodo(this.state.todoText));
            this.setState({todoText: ''});
        } else {
            this.refs.todoText.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input ref="todoText" onChange={this.handleChange} value={this.state.todoText} type="text" placeholder="Add new todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {};
AddTodo.defaultProps = {};

export default connect()(AddTodo);

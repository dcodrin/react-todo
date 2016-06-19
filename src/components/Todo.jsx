import React from 'react';
import moment from 'moment';

import {connect} from 'react-redux';
import {startToggleTodo, startDeleteTodo} from 'actions';

//export Todo for testing purposes
export class Todo extends React.Component {

    constructor() {
        super();
        this.state = {hover: false};
    }

    handleHover(event) {
        event === 'in' ? this.setState({hover: true}) : this.setState({hover: false});
    }

    render() {
        const {id, text, completed, createdAt, completedAt, dispatch} = this.props;

        const todoClassName = completed ? 'todo todo-completed' : 'todo';

        const renderDate = (complete) => {
            let message, time, format = 'MMM Do YYYY @ h:mm a';
            if (complete) {
                time = moment.unix(completedAt).format(format);
                message = 'Completed on ';
            } else {
                time = moment.unix(createdAt).format(format);
                message = 'Created on ';
            }
            return message + time;
        };

        const renderDeleteBtn = () => {
            return (
                <div className="todo__delete">
                    <i onClick={() => {dispatch(startDeleteTodo(id));}}>X</i>
                </div>
            );
        };

        return (
            <div className={todoClassName} onMouseEnter={this.handleHover.bind(this, 'in')} onMouseLeave={this.handleHover.bind(this, 'out')}>
                {this.state.hover ? renderDeleteBtn() : ''}
                <div className="todo__info">
                    <p>{text}</p>
                    <p className="todo__subtext">{completedAt ? renderDate() : ''}</p>
                    <p className="todo__subtext">{renderDate(completedAt)}</p>
                </div>
                <div>
                    <input onChange={(e) => {
                    e.stopPropagation();
                    dispatch(startToggleTodo(id, !completed));
                }} type="checkbox" checked={completed}/>
                </div>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

//connect gives us access to dispatch by default
export default connect()(Todo);



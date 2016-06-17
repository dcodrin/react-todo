import React from 'react';
import moment from 'moment';

import {connect} from 'react-redux';
import {toggleCompleted} from 'actions';

//export Todo for testing purposes
export class Todo extends React.Component {
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

        return (
            <div className={todoClassName}>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{completedAt ? renderDate() : ''}</p>
                    <p className="todo__subtext">{renderDate(completedAt)}</p>
                </div>
                <div>
                    <input onChange={(e) => {
                    e.stopPropagation();
                    dispatch(toggleCompleted(id));
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



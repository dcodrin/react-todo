import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    render() {
        const {id, text, completed, createdAt, completedAt} = this.props;

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
                    this.props.onToggle(id, moment().unix());
                }} type="checkbox" checked={completed}/>
                </div>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;

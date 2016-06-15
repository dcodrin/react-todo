import React from 'react';
import moment from 'moment';

class Todo extends React.Component {
    render() {
        const {id, text, completed, createdAt, completedAt} = this.props;

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
            <div>
                <p>{text}</p>
                <p>{completedAt ? renderDate() : ''}</p>
                <p>{renderDate(completedAt)}</p>
                <input onChange={(e) => {
                    e.stopPropagation();
                    this.props.onToggle(id, moment().unix());
                }} type="checkbox" checked={completed}/>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;

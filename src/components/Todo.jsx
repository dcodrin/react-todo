import React from 'react';

class Todo extends React.Component {
    render() {
        const {id, text, completed} = this.props;
        return (
            <div>
                <p>{text}</p>
                <input onChange={(e) => {
                    e.stopPropagation();
                    this.props.onToggle(id);
                }} type="checkbox" checked={completed}/>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;

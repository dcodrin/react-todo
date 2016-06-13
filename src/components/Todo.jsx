import React from 'react';

class Todo extends React.Component {
    render() {
        const {id, text} = this.props;
        return (
            <div>
                <p>Id: {id} -- {text}</p>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;

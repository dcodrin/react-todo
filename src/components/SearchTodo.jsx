import React from 'react';

class SearchTodo extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const showCompleted = this.refs.showCompleted.checked;
        const searchTodo = this.refs.searchTodo.value;
        this.props.onSearchTodos(showCompleted, searchTodo);
    }

    render() {
        return (
            <div className="container__header">
                <div>
                    <input ref="searchTodo" type="search" onChange={this.handleChange} placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleChange}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

SearchTodo.propTypes = {};
SearchTodo.defaultProps = {};

export default SearchTodo;

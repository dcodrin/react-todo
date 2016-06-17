import React from 'react';
import {connect} from 'react-redux';
import {setSearchText, showCompleted} from 'actions';

export class SearchTodo extends React.Component {
    constructor() {
        super();

        this.handleSearch = this.handleSearch.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    }

    handleSearch() {
        const searchTodo = this.refs.searchTodo.value;
        const {dispatch} = this.props;
        dispatch(setSearchText(searchTodo));
    }
    handleToggleCompleted() {
        const {dispatch} = this.props;
        dispatch(showCompleted());
    }
    render() {
        return (
            <div className="container__header">
                <div>
                    <input ref="searchTodo" value={this.props.searchText} type="search" onChange={this.handleSearch} placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={this.props.showCompleted} ref="showCompleted" onChange={this.handleToggleCompleted}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

SearchTodo.propTypes = {};
SearchTodo.defaultProps = {};

export default connect(({showCompleted, searchText}) => {
    return {
        showCompleted,
        searchText
    };
})(SearchTodo);

import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import SearchTodo from 'SearchTodo';

describe('SearchTodo', () => {

    it('should exist', () => {
        expect(SearchTodo).toExist();
    });

    it('should call this.props.onSearchTodos with input text', () => {
        const searchText = 'get';
        const spy = expect.createSpy();
        const searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearchTodos={spy}/>);

        searchTodo.refs.searchTodo.value = searchText;
        TestUtils.Simulate.change(searchTodo.refs.searchTodo);
        expect(spy).toHaveBeenCalledWith(false, 'get');
    });

    it('should call this.props.onSearchTodos with the proper checked value', () => {
        const spy = expect.createSpy();
        const searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearchTodos={spy}/>);
        searchTodo.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(searchTodo.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
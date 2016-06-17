import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import SearchTodo, {SearchTodo as UnconnectedSearchTodo} from 'SearchTodo';

describe('SearchTodo', () => {

    it('should exist', () => {
        expect(SearchTodo).toExist();
    });

    it('should dispatch SEARCH_TEXT action with input text payload', () => {
        const searchText = 'get';
        const spy = expect.createSpy();
        const searchTodo = TestUtils.renderIntoDocument(<UnconnectedSearchTodo dispatch={spy}/>);

        const action = {
            type: 'SEARCH_TEXT',
            searchText
        };

        searchTodo.refs.searchTodo.value = searchText;
        TestUtils.Simulate.change(searchTodo.refs.searchTodo);
        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch SHOW_COMPLETED with the proper checked value', () => {
        const spy = expect.createSpy();
        const searchTodo = TestUtils.renderIntoDocument(<UnconnectedSearchTodo dispatch={spy}/>);
        const action = {
            type: 'SHOW_COMPLETED'
        };
        searchTodo.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(searchTodo.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
});
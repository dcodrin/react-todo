import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
            id: 1,
            text: 'test 1'
        }, {
            id: 2,
            text: 'test 2'
        }];

        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        //check how many components of a specific type are rendered by a parent component
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });
});
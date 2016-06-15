import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to state.todos when handleAddTodo is called', () => {
        const main = TestUtils.renderIntoDocument(<TodoApp />);
        const testText = 'Hello Mars!';
        main.handleAddTodo(testText);
        const findMatch = main.state.todos.findIndex((todo) => {
            return todo.text === testText;
        });

        expect(findMatch).toBeMoreThan(-1);
    });

    it('should toggle completed value when handleToggle is called', () => {
        const todoData = {id: 11, text: 'testing', completed: false};
        const main = TestUtils.renderIntoDocument(<TodoApp />);
        main.setState({todos: [todoData]});

        expect(main.state.todos[0].completed).toBe(false);
        main.handleToggle(11);
        expect(main.state.todos[0].completed).toBe(true);
    });
});
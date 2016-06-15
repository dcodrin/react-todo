import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';
import moment from 'moment';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to state.todos when handleAddTodo is called', () => {
        const main = TestUtils.renderIntoDocument(<TodoApp />);
        const testText = 'Hello Mars!';
        main.handleAddTodo(testText);
        const findMatch = main.state.todos.find((todo) => {
            return todo.text === testText;
        });

        expect(findMatch.text).toEqual(testText);
        expect(typeof main.state.todos[0].createdAt).toBe('number');
    });

    it('should toggle completed value and completedAt when handleToggle is called', () => {
        const todoData = {id: 11, text: 'testing', completed: false};
        const main = TestUtils.renderIntoDocument(<TodoApp />);
        main.setState({todos: [todoData]});

        expect(main.state.todos[0].completed).toBe(false);
        main.handleToggle(11, moment().unix());
        expect(main.state.todos[0].completed).toBe(true);
        expect(typeof main.state.todos[0].completedAt).toBe('number');
    });

    it('should remove completedAt value when checkbox is unchecked', () => {
        const todoData = {id: 11, text: 'testing', completed: false, completedAt: ''};
        const main = TestUtils.renderIntoDocument(<TodoApp />);
        main.setState({todos: [todoData]});

        main.handleToggle(11, moment().unix());
        expect(typeof main.state.todos[0].completedAt).toBe('number');
        main.handleToggle(11, moment().unix() + 60);
        expect(main.state.todos[0].completedAt).toBe('');
    });
});
import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';
import {Provider} from 'react-redux';

import configureStore from 'configureStore';
import TodoList, {TodoList as UnconnectedTodoList} from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        const todos = [{
            id: 1,
            text: 'test 1',
            completed: false,
            completedAt: '',
            createdAt: 500
        }, {
            id: 2,
            text: 'test 2',
            completed: true,
            completedAt: '',
            createdAt: 2500
        }];

        const store = configureStore({todos});
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
        const todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
        //check how many components of a specific type are rendered by a parent component
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render sarcasm if no todos', () => {
        const todos = [];

        const todoList = TestUtils.renderIntoDocument(<UnconnectedTodoList todos={todos}/>);
        const $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toBe(1);
    });
});
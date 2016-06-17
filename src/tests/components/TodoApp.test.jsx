import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';
import {Provider} from 'react-redux';
import configureStore from 'configureStore';

import TodoApp from 'TodoApp';
import TodoList from 'TodoList';
describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should render TodoList', () => {
        const store = configureStore();
        const provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp />
            </Provider>
        );

        const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
        const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
        expect(todoList.length).toEqual(1);
    });
});
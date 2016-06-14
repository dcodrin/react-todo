import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import Main from 'Main';

describe('Main', () => {
    it('should exist', () => {
        expect(Main).toExist();
    });

    it('should add todo to state.todos when handleAddTodo is called', () => {
        const main = TestUtils.renderIntoDocument(<Main />);
        const testText = 'Hello Mars!';
        main.handleAddTodo(testText);
        const findMatch = main.state.todos.findIndex((todo) => {
            return todo.text === testText;
        });

        expect(findMatch).toBeMoreThan(-1);
    });
});
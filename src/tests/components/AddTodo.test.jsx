import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';


import AddTodo, {AddTodo as UnconnectedAddTodo} from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch the action ADD_TODO if the data is valid', () => {
        const spy = expect.createSpy();
        const testText = 'buy some milk and cookies. mmmm cookies...';
        const action = {
            type: 'ADD_TODO',
            text: testText
        };

        const addTodo = TestUtils.renderIntoDocument(<UnconnectedAddTodo dispatch={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.state.todoText = testText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('it should NOT dispatch ADD_TODO if data is INVALID', () => {
        const spy = expect.createSpy();
        const testText = '';
        const addTodo = TestUtils.renderIntoDocument(<UnconnectedAddTodo dispatch={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.state.todoText = testText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
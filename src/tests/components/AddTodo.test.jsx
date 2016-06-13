import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call this.props.onAddTodo if todoText in state is valid', () => {
        const spy = expect.createSpy();
        const testText = 'buy some milk and cookies. mmmm cookies...';
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.state.todoText = testText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(testText);
    });

    it('should NOT call this.props.onAddTodo if todoText in state is NOT valid', () => {
        const spy = expect.createSpy();
        const testText = '';
        const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.state.todoText = testText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
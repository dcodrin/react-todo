import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

import Todo from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on change', () => {
        const todoData = {
            id: 11,
            text: "testing component",
            completed: true
        };
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        const $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.change($el.find('input')[0]);

        expect(spy).toHaveBeenCalledWith(todoData.id);
    });
});
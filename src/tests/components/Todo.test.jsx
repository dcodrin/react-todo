import React from 'react';
import ReactDOM from'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';
import moment from 'moment';

import {Todo} from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should dispatch TOGGLE_COMPLETED action with id payload on change', () => {
        const todoData = {
            id: 11,
            text: "testing component",
            completed: true,
            completedAt: ''
        };
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
        const $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.change($el.find('input')[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_COMPLETED',
            id: todoData.id
        });
    });
});
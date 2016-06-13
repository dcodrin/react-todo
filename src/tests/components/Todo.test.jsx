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
});
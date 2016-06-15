import expect from 'expect';

import TodoApi from 'TodoApi';

describe('TodoApi', () => {

    beforeEach(() => {
       localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            const testData = [{
                id: 1,
                text: 'test data',
                completed: false
            }];

            TodoApi.setTodos(testData);
            const localTodos = JSON.parse(localStorage.getItem('todos'));

            expect(localTodos).toEqual(testData);

        });

        it('should not set invalid todos array', () => {
            const invalidData = {
                id: 1,
                text: 'invalid data',
                completed: false
            };

            TodoApi.setTodos(invalidData);
            const localTodos = JSON.parse(localStorage.getItem('todos'));

            expect(localTodos).toEqual(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for invalid or missing local storage data', () => {
            const localTodos = TodoApi.getTodos();
            expect(localTodos).toEqual([]);
        });

        it('should return todos if valid data was set on local storage', () => {
            const testData = [{
                id: 1,
                text: 'valid data',
                completed: true
            }];

            localStorage.setItem('todos', JSON.stringify(testData));
            const localTodos = TodoApi.getTodos();

            expect(localTodos).toEqual(testData);
        });
    });
});
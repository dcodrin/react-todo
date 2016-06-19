import expect from 'expect';

import TodoApi from 'TodoApi';

describe('TodoApi', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoApi).toExist();
    });

    describe('filterTodos', () => {
        const todos = [{
            id: 1,
            text: 'test bacon',
            completed: true
        }, {
            id: 2,
            text: 'test burger good',
            completed: false
        }, {
            id: 3,
            text: 'test hot dog good',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);

        });

        it('should return todos NOT yet completed', () => {
            const filteredTodos = TodoApi.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            const filteredTodos = TodoApi.filterTodos(todos, true, '');

            expect(filteredTodos[0].completed).toBe(false);
        });

        describe('serachText', () => {
            it('should return todos whose text property contains a given search parameter', () => {
                let filteredTodos = TodoApi.filterTodos(todos, true, 'bacon');

                expect(filteredTodos[0].text.toLowerCase()).toEqual('test bacon');
                expect(filteredTodos.length).toBe(1);

                filteredTodos = TodoApi.filterTodos(todos, true, 'good');
                expect(filteredTodos.length).toBe(2);
            });

            it('should return all todos if searchText is empty', () => {
                let filteredTodos = TodoApi.filterTodos(todos, true, '');
                expect(filteredTodos.length).toBe(3);
            });
        });
    });
});
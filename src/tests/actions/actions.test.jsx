import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'firebaseConfig';

import {startToggleTodo, updateTodo, setSearchText, addTodo, toggleCompleted, showCompleted, addTodos, startAddTodo, startAddTodos, startDeleteTodo, deleteTodo} from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate search text action', () => {
        const action = {
            type: 'SEARCH_TEXT',
            searchText: 'Testing search text'
        };
        const res = setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate a create todo action', () => {
        const action = {
            type: 'ADD_TODO',
            todo: {
                id: 'abc123',
                text: 'hello',
                createdAt: 10000,
                completed: false
            }
        };

        const res = addTodo(action.todo);
        expect(res).toEqual(action);
    });

    it('should create todo and dispatch addTodo', (done) => {
        const store = createMockStore({});
        const todoText = 'Test todo item';

        store.dispatch(startAddTodo(todoText)).then(() => {
            //use getActions for array of dispatched actions
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(() => {
            done();
        });
    });

    it('should generate an UPDATE_TODO action', () => {
        const action = {
            type: 'UPDATE_TODO',
            id: '123',
            updates: {
                completed: false
            }
        };

        const res = updateTodo(action.id, action.updates);
        expect(res).toEqual(action);
    });

    it('should generate a show completed action', () => {
        const action = {
            type: 'SHOW_COMPLETED'
        };

        const res = showCompleted();
        expect(res).toEqual(action);
    });

    it('should generate addTodos action', () => {
        const todos = [{id: 1}, {id: 2}];
        const action = {
            type: 'ADD_TODOS',
            todos
        };

        const res = addTodos(todos);
        expect(res).toEqual(action);
    });

    it('should dispatch deleteTodo action', () => {
        const todos = [{id: 1}, {id: 2}];
        const action = {
            type: 'DELETE_TODO',
            id: todos[0].id
        };

        const res = deleteTodo(todos[0].id);
        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;

        beforeEach((done) => {

            firebaseRef.remove().then(() => {
                firebaseRef.child('todos').push({
                    text: 'Testing firebase todo',
                    completed: false,
                    createdAt: 0
                }).then((snapshot) => {
                    testTodoRef = snapshot;
                    done();
                });
            });
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = startToggleTodo(testTodoRef.key, true);
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();
            }, done);
        });

        it('should populate todos and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = startAddTodos();
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                expect(mockActions[0]).toInclude({
                    type: 'ADD_TODOS'
                });
                expect(mockActions[0].todos.length).toBeGreaterThan(0);
                expect(mockActions[0].todos[0].text).toEqual('Testing firebase todo');
                done();
            },done);
        });

        it('should delete todo and dispatch DELETE_TODO action', (done) => {
            const store = createMockStore({});
            const action = startDeleteTodo(testTodoRef.key);
            store.dispatch(action).then(() => {
               const mockActions = store.getActions();
                expect(mockActions[0]).toInclude({
                    type: 'DELETE_TODO',
                    id: testTodoRef.key
                });
                done();
            }, done);
        });
    });

});
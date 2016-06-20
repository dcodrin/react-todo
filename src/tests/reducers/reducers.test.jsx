import expect from 'expect';
import moment from 'moment';

//deep-freeze checks for data mutation
import df from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SEARCH_TEXT',
                searchText: 'food'
            };
            const res = searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            const action = {
                type: 'SHOW_COMPLETED'
            };
            const res = showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'testing add',
                    completed: false,
                    createdAt: 10000
                }
            };
            const res = todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.todo.text);
        });

        it('should update an individual todo', () => {
            const updates = {
                completed: false,
                completedAt: null
            };

            const todosArr = [{
                id: 'abc123',
                text: 'Let\'s get to eating them hot dogs!',
                completed: true,
                createdAt: moment().unix(),
                completedAt: moment.unix()
            }];

            const action = {
                type: 'UPDATE_TODO',
                id: todosArr[0].id,
                updates
            };

            const res = todosReducer(df(todosArr), df(action));
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todosArr[0].text);
        });

        it('should add existing todos', () => {
            const todos = [{
                id: 1,
                text: 'testing adding todos',
                completed: false,
                completedAt: undefined,
                createdAt: 500
            }];
            const action = {
                type: 'ADD_TODOS',
                todos
            };

            const res = todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        it('should delete todo and update state', () => {
            const todos = [{id: 1}, {id: 2}];
            const action = {
                type: 'DELETE_TODO',
                id: todos[0].id
            };
            const res = todosReducer(df(todos), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].id).toEqual(todos[1].id);
        });
    });

    describe('authReducer', () => {
        it('should set user', () => {
            const action = {
                type: 'LOGIN',
                uid: 'abc123'
            };

            const res = authReducer(df({}), df(action));
            expect(res).toEqual({uid: action.uid});
        });

        it('should clear user', () => {
           const action = {
               type: 'LOGOUT'
           };

            const res = authReducer(df({uid: 'abc123'}), df(action));
            expect(res).toEqual({});
        });
    });
});
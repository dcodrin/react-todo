import expect from 'expect';
import moment from 'moment';

//deep-freeze checks for data mutation
import df from 'deep-freeze-strict';

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

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
                text: 'Eat all them burgers!'
            };
            const res = todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle completed on an individual todo', () => {
            const action = {
                type: 'TOGGLE_COMPLETED',
                id: 1
            };

            const todosArr = [{
                id: action.id,
                text: 'Let\'s get to eating them hot dogs!',
                completed: true,
                createdAt: moment().unix(),
                completedAt: moment.unix()
            }];

            const res = todosReducer(df(todosArr), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});
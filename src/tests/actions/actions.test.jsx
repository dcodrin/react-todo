import expect from 'expect';
import {setSearchText, addTodo, toggleCompleted, showCompleted} from 'actions';

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
            text: 'Become billionaire'
        };

        const res = addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate a toggle completed action', () => {
       const action = {
           type: 'TOGGLE_COMPLETED',
           id: '123'
       };

        const res = toggleCompleted(action.id);
        expect(res).toEqual(action);
    });

    it('should generate a show completed action', () => {
        const action = {
            type: 'SHOW_COMPLETED'
        };

        const res = showCompleted();
        expect(res).toEqual(action);
    });
});
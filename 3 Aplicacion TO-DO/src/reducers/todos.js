import * as types from '../actions/actionTypes';

const reducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TODO: {
            return [
                ...state,
                { 
                    id: action.id,
                    completed: false,
                    text: action.text
                }
            ]
        }

        case types.TOGGLE_TODO: {
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return Object.assign(todo, {completed: !todo.completed});
            })
        }

        case types.REMOVE_TODO: {
            return state.filter(todo => todo.id !== action.id);
        }

        default:
            return state;
    }
}
export default reducer
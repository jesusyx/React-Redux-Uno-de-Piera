import * as types from './actionTypes';

let nextTodoId = 0;

const addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        id: nextTodoId++,
        text: text
    }
}

const removeTodo = (id) => {
    return {
        type: types.REMOVE_TODO,
        id: id
    }
}

const toggleTodo = (id) => {
    return {
        type: types.TOGGLE_TODO,
        id: id
    }
}

const setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter: filter
    }
}

export { addTodo, removeTodo, toggleTodo, setVisibilityFilter }
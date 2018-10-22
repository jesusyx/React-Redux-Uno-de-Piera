import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
//import { routerReducer } from 'react-router-redux';


//defino el nombre del stado = counter
export default combineReducers({
    counter: counter,
    todos: todos,
    visibilityFilter: visibilityFilter
});

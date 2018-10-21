//import createLogger from 'redux-logger';
//import { createStore, applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import reducers from '../reducers';
/*podemos usar redux promise para apis externas*/

// const logger = createLogger();
// const middleware = [logger];

const configStore = (initialState) => {
    return createStore(
        reducers, //Or named rootReducer
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configStore
import * as types from '../actions/actionTypes';

const initialState = {
    count: 0
};


//maybe initialState is previous state
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                count: state.count + 1
            }
        case types.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default reducer
//this is the actions named "Counter" I guess :v

import * as types from './actionTypes'

const increment = () => {
    return {
        type: types.INCREMENT
    }
}
const decrement = () => {
    return {
        type: types.DECREMENT
    }
}

export { increment, decrement }
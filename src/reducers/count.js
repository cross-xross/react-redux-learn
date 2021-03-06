import { COUNT_UP, COUNT_DOWN } from '../actions'

const initialState = {
    value: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COUNT_UP:
            return {
                value: state.value + 1
            }
        case COUNT_DOWN:
            return {
                value: state.value - 1
            }
        default:
            return state
    }
}
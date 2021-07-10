import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state)
    
    switch (action.type) {
        case actionTypes.INCREMENT:
            newState.counter = state.counter + 1
            break;
        case actionTypes.DECREMENT:
            newState.counter = state.counter - 1
            break;
        case actionTypes.ADD:
            newState.counter = state.counter + action.val
            break;
        case actionTypes.SUBTRACT:
            newState.counter =  state.counter - action.val
            break;
        case actionTypes.STORE_RESULT:
            newState.results = state.results.concat({id: new Date(), value: state.counter})
            break;
        case actionTypes.DELETE_RESULT:
            newState.results = state.results.filter(result => result.id !== action.resultElId)
            break;
        default:
            break;
    }
    
    return newState
}

export default reducer
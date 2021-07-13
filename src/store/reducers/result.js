import * as actionTypes from '../actions'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    const newState = Object.assign({}, state)
    
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            newState.results = state.results.concat({id: new Date(), value: action.result})
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
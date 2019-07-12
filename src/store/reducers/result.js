import * as actions from '../actions/actionsTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actions.DELETE_RESULT:
            // const array = [...state.results];
            // results: array.splice(action.id, 1)
            const array = state.results.filter(result=> result.id !==action.id)
            return {
                ...state,
                results: array
            }
    }
    return state;
}

export default reducer;
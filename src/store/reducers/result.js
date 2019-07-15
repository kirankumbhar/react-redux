import * as actions from '../actions/actionsTypes';

import { updateObject } from '../utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const array = state.results.filter(result=> result.id !==action.id)
    return updateObject(state, {results: array});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actions.DELETE_RESULT:
            return deleteResult(state, action);
    }
    return state;
}

export default reducer;
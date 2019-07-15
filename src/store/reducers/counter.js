import * as actions from '../actions/actionsTypes';

import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actions.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actions.ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case actions.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
    }
    return state;
}

export default reducer;
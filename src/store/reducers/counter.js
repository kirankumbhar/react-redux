import * as actions from '../actions/actionsTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            const newtstate = Object.assign({}, state);
            newtstate.counter = state.counter + 1;
            return newtstate;

        case actions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actions.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actions.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}

export default reducer;
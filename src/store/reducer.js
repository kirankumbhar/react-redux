import * as actions from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actions.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
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
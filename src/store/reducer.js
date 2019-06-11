const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newtstate = Object.assign({}, state);
            newtstate.counter = state.counter + 1;
            return newtstate;

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
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
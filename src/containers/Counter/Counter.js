import React, { Component } from 'react';
import { connect } from "react-redux";

import * as actions from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(result => {
                        return <li key = {result.id} onClick={() => this.props.onDeleteResult(result.id)} >{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actions.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actions.DECREMENT}),
        onAddCounter: () => dispatch({type: actions.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actions.SUBTRACT, value: 10}),
        onStoreResult: () => dispatch({type: actions.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actions.DELETE_RESULT, id: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
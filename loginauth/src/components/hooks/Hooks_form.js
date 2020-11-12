import React, { useState, useContext, useReducer } from 'react';
import * as ACTIONS from '../store/action/actions';
import * as formReducer from '../store/reducers/form_reducer';
import Context from '../utils/context';



const HooksForm = () => {

    const context = useContext(Context);

    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');

    const [ state, dispatch ] = useReducer(formReducer.formReducer, formReducer.INITIAL_STATE);

    const handleUseStateChange = (event) => {
        setValueChange(event.target.value)
    }

    const handleUseStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value);
    }

    const handleUseReducerChange = (event) => {
        dispatch(ACTIONS.user_input_change(event.target.value));
        console.log(state);
    }

    const handleUseReducerSubmit = (event) => {
        event.preventDefault();
        dispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
}




    return (
        <div>
            <form onSubmit={handleUseStateSubmit}>
                <label> React useState: </label>
                <input id="useState" onChange={handleUseStateChange} />
                <button type="submit"> Submit </button>
            </form>
            <br />

            <form onSubmit={handleUseReducerSubmit}>
                <label> REact useREducer: </label>
                <input id="useReducer" onChange={handleUseReducerChange} />
                <button type="submit"> Submit </button>    
            </form>
            <br />

            <form onSubmit={context.dispatchUserSubmit}>
                <label>
                    React useContext;
                </label>
                <input id="useContext" onChange={context.dispatchUserChange} />
                <button type="submit"> Submit </button>
            </form>
            <br />

            <h3>React useState:</h3>
            <p>Change: {valueChange}</p>
            <p>Submit: {valueSubmit}</p>
            
            <h3>React useReducer:</h3>
            <p>Change: {state.userInputChange}</p>
            <p>Submit: {state.userInputSubmit}</p>
            <br />
            <h3>React useContext:</h3>
            <p>Change: {context.userContextChange}</p>
            <p>Submit: {context.userContextSubmit}</p>
            <br />
            <br />


        </div>
    )
}

export default HooksForm

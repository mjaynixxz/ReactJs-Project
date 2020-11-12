import React, { useState, useEffect, useContext, useReducer } from 'react';
import * as ACTIONS from '../store/action/actions';
import * as Reducer1 from '../store/reducers/plain_reducer';
import Context from '../utils/context';

const HooksContainer = () => {
    const context = useContext(Context);

    const [value, setValue] = useState(0);

    const [useEffectValue, setUseEffectValue] = useState(null);

    const [state, dispatch] = useReducer(Reducer1.plainReducer, Reducer1.INITIAL_STATE);

    useEffect(()=>{
        setTimeout(() => setUseEffectValue("useEffect worked"), 3000);
    }, [value]);

    const incrementValue = () => {
        setValue(value + 1);
    }

    const decrementValue = () => {
        setValue(value - 1);

    const handleuseEffectValue = () => {
        setUseEffectValue("Some String");
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success());
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure());
    }

    return (
        <div>
            <div>
                <button onClick={()=> handleuseEffectValue()}>Handle VAlue</button>
                <button onClick={()=>handleDispatchTrue()}>Dispatch True</button>
                <button onClick={()=>handleDispatchFalse()}>Dispatch False</button>
                <button onClick={()=>context.dispatchContextTrue()}>Dispatch Context True</button>
                <button onClick={()=>context.dispatchContextFalse()}>Dispatch Context false</button>
                <button onClick={()=>incrementValue()}>Increment Local Value</button>
                <button onClick={()=>decrementValue()}>Decrement Local Value</button>
                <br />
                <br />
                
                {context.useContextSubmit ? <h3>{context.useContextSubmit}</h3> : <h3>No user text</h3>}
                <br />

                {state.stateprops1 ? <h3> Stateprop1 is True</h3> : <h3>Stateprop1 is False</h3>}
                <br />

                {state.stateprops2 ? <h3>Stateprop2 is True</h3> : <h3>Stateprop2 is False</h3>}
                <br />

                {useEffectValue ? <h3>{useEffectValue}</h3> : <h3>No value</h3>}
                <br />

                <p>Local Value: {value}</p>

                <br />
                <br />



            </div>
        </div>
    )
}
}
export default HooksContainer;

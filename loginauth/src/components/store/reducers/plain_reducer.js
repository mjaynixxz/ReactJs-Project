import * as TYPES from '../action/action_types';



export const INITIAL_STATE = {
    stateprops1: false,
    stateprops2: false
};

export const plainReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPES.SUCCESS:
            return{ ...state, stateprops1: true, stateprops2: true };
        case TYPES.FAILURE:
            return { ...state, stateprops1: false, stateprops2: false };
        default:
            throw new Error();
    }
};
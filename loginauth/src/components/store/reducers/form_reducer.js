import * as TYPES from '../action/action_types';

export const INITIAL_STATE = {
    userInputChange: '',
    userInputSubmit: ''
};


export const formReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPES.USER_INPUT_CHANGE:
            return { ...state, userInputChange: action.payload }
        case TYPES.USER_INPUT_SUBMIT:
            return { ...state, userInputSubmit: action.payload }
        default:
            throw new Error();
    }
};

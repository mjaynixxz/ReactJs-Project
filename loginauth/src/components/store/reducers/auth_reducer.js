import * as TYPES from '../action/action_types';


export const INITIAL_STATE = {
    isAuthenticated: false,
    profile: null
}


export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TYPES.LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true };
        case TYPES.LOGIN_FAILURE:
            return { ...state, isAuthenticated: false };
        case TYPES.ADD_PROFILE:
            return { ...state, profile: action.payload };
        case TYPES.REMOVE_PROFILE:
            return { ...state, profile: null };
        default:
            return state;
            
    }
}

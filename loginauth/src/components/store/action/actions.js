import * as TYPES from './action_types';

export const SUCCESS = {
    type: TYPES.SUCCESS
}

export const FAILURE = {
    type: TYPES.FAILURE
}

export const success = () => {
    return {
        type: TYPES.SUCCESS
    }
}

export const failure = () => {
    return {
        type: TYPES.FAILURE
    }
}

export const login_success = () => {
    return {
        type: TYPES.LOGIN_SUCCESS
    }
}

export const login_failure = () => {
    return { 
        type: TYPES.LOGIN_FAILURE

     }
}

export const add_profile = (profile) => {
    return { 
        type: TYPES.ADD_PROFILE,
        payload: profile
     }
}

export const remove_profile = () => {
    return { 
        type: TYPES.REMOVE_PROFILE
     }
}


export const user_input_change = (text) => {
    return { 
        type: TYPES.USER_INPUT_CHANGE,
        payload: text
     }
}

export const user_input_submit = (text) => {
    return { 
        type: TYPES.USER_INPUT_SUBMIT,
        payload: text
     } 
}
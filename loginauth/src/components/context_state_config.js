import React, { useReducer } from 'react';
import Context from './utils/context';

import * as ACTIONS from './store/action/actions';

import * as Reducer1 from './store/reducers/plain_reducer';
import * as authReducer from './store/reducers/auth_reducer';
import * as formReducer from './store/reducers/form_reducer';

import Auth from './utils/auth';
import Routes from './routes';
 
const auth = new Auth();

const ContextState = () => {
    //Plain Reducer
    const [stateReducer1, dispatchReducer1] = useReducer(Reducer1.plainReducer, Reducer1.INITIAL_STATE);

    const handleDispatchTrue = () => {
        dispatchReducer1(ACTIONS.success());
    }

    const handleDispatchFalse = () => {
        dispatchReducer1(ACTIONS.failure());
    }



    //Auth Reducer

    const [stateAuthReducer, dispatchAuthReducer] = useReducer(authReducer.authReducer, authReducer.INITIAL_STATE);

    const handleDispatchLogin = () => {
        dispatchAuthReducer(ACTIONS.login_success());
    }

    const handleDispatchLogout = () => {
        dispatchAuthReducer(ACTIONS.login_failure());
    }
    
    
    const handleDispatchAddProfile = (profile) => {
        dispatchAuthReducer(ACTIONS.add_profile(profile))
    }

    const handleDispatchRemoveProfile = () => {
        dispatchAuthReducer(ACTIONS.remove_profile());
    }


    //Form Reducer

    const [stateFormReducer, dispatchFormReducer] = useReducer(formReducer.formReducer, formReducer.INITIAL_STATE);

    const handleFormChange = (event) => {
        dispatchFormReducer(ACTIONS.user_input_change(event.target.value));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        event.persist();
        dispatchFormReducer(ACTIONS.user_input_submit(event.target.useContext.value));
    }

    //Handle authentication from callback
    const handleAuthCallback = props => {
        if (props.location.hash) {
            auth.handleAuth();
        }
    }

    return(
        <>
        <Context.Provider 
            
            value = {{

                //Reducer 1
                stateprops1: stateReducer1.stateprops1,
                stateprops2: stateReducer1.stateprops2,
                dispatchContextTrue: () => handleDispatchTrue(),
                dispatchContextFalse: () => handleDispatchFalse(),

                //AuthReducer
                authState: stateAuthReducer.isAuthenticated,
                profileState: stateAuthReducer.profile,
                dispatchUserLogin: () => handleDispatchLogin(),
                dispatchUserLogout: () => handleDispatchLogout(),
                dispatchAddProfile: (profile) => handleDispatchAddProfile(profile),
                dispatchRemoveProfile: () =>  handleDispatchRemoveProfile(),

                //FormReducer
                userContextChange: stateFormReducer.userInputChange,
                userContextSubmit: stateFormReducer.userInputSubmit,
                dispatchUserChange: (event) => handleFormChange(event),
                dispatchUserSubmit: (event) => handleFormSubmit(event),

                //handle auth callback
                handleAuth: (props) => handleAuthCallback(props),
                authObj: auth

        }}>
        <Routes />
        </Context.Provider>
        </>
    );


};


export default ContextState;
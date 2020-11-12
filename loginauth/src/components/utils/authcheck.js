import React, { useEffect, useContext } from 'react';
import history from './history';
import Context from './context';
import *  as ACTIONS from '../store/action/actions';


const AuthCheck = () => {
    const context = useContext(Context)

    useEffect(() => {
        if(context.authObj.isAuthenticated()) {
            context.dispatchUserLogin()
            context.dispatchAddprofile(context.authObj.userProfile)
            history.replace('/')
        } else {
            context.dispatchUserLogout()
            context.dispatchRemoveProfile()
            history.replace('/')
        }
    }, [context]);

    return (
        <div>
        
        </div>
    )
}

export default AuthCheck;
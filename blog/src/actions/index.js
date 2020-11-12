import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';




//SECOND METHOD TO HANDLE MULTIPLE NETWORK REQUEST


export const fetchPostandUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id=>dispatch(fetchUsers(id)))
        .value()

};

export const fetchPost =  () => async dispatch => {
    try {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POST', payload: response.data });
    }
   
    catch (ex) {
        console.log('error occured', ex)
    }
}

export const fetchUsers = (id) => async dispatch => {
    try {
        const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USERS', payload: response.data });
    }

    catch (ex) {
        console.log('user err occured', ex);
    }
    
}




//USING LOADSH MEMOIZE TO HANDLE MULTIPLE NETWORK REQUEST FIRST METHOD

// export const fetchUsers =  id => dispatch => _fetchUser(id, dispatch);


// const _fetchUser = _.memoize(async(id, dispatch)=>{
//     try {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USERS', payload: response.data });
//     }

//     catch (ex) {
//         console.log('user err occured', ex);
//     }
    
// });

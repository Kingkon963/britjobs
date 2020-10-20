//import {USERS} from '../../data/users';
import * as ActionTypes from '../ActionTypes';

const initialState = {
    currentUser: null
}

export const Users = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.ADD_USER:
            return {...state, currentUser: action.payload};
        case ActionTypes.CLEAR_CURRENT_USER:
            return {...state, currentUser: null};
        default:
            return state;
    };
};
import {USERS} from '../../data/users';

export const Users = (state = USERS, action) => {
    switch(action.type){
        default:
            return state;
    };
};
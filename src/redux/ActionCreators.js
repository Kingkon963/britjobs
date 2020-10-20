import * as ActionTypes from './ActionTypes';

export const toggleFavourite = (jobId) => {
    return {
        type: ActionTypes.TOGGLE_FAVOURITE,
        payload: {
            jobId: jobId
        }
    }
}

// users
export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}

export const clearCurrentUser = () => {
    return {
        type: ActionTypes.CLEAR_CURRENT_USER
    }
}

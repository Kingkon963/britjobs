import * as ActionTypes from './ActionTypes';

export const toggleFavourite = (jobId) => {
    return {
        type: ActionTypes.TOGGLE_FAVOURITE,
        payload: {
            jobId: jobId
        }
    }
}
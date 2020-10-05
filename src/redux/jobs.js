import {JOBS} from '../data/jobs';
import * as ActionTypes from './ActionTypes';

export const Jobs = (state = JOBS, action) => {
    switch(action.type){
        case ActionTypes.TOGGLE_FAVOURITE:
            let jobId = action.payload.jobId;
            let newState = [...state];
            newState.find(job => job.id === jobId).isFavourite = !newState.find(job => job.id === jobId).isFavourite;
            return newState;
        default:
            return state;
    }
};
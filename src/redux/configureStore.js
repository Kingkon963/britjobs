import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {Jobs} from './reducers/jobs';
import {Users} from './reducers/users';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            users: Users
        },
        applyMiddleware(thunk, logger))
    );
    return store;
}
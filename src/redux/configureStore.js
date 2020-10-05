import { createStore, combineReducers } from 'redux';
import {Jobs} from './jobs';
import {Users} from './users';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            jobs: Jobs,
            users: Users
        })
    );
    return store;
}
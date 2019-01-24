import { combineReducers} from 'redux';
import {reducer } from 'redux-form';
import authReducer from './authReducers';
import streamReducer from './streamReducers';

export default combineReducers({
    auth: authReducer,
    form: reducer,
    streams: streamReducer
});
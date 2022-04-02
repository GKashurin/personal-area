import { combineReducers } from 'redux';
// @ts-ignore
import {tableReducer} from './tableReducer.ts'
// @ts-ignore
import {authReducer} from './authReducer.ts';

export const rootReducer = combineReducers({
	table: tableReducer,
	auth: authReducer
});
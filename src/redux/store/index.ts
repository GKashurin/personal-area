import {createStore} from 'redux';
// @ts-ignore
import {rootReducer} from '../reducers/index.ts';

export const store = createStore(rootReducer)
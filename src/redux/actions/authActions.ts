import {IUser} from '../../types';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const LOGOUT = 'LOGOUT';

export const authRequest = (payload: IUser) => ({type: AUTH_REQUEST, payload})
export const logOut = () => ({type: LOGOUT})
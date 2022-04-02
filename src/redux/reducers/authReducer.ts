import {AUTH_REQUEST, LOGOUT} from '../actions/authActions.ts';
import {IAuthAction, IAuthState} from '../../types';

const initialState = {
	isLoggedIn: false,
	users: [{
		email: 'test@test.com',
		password: 'test123'
	}]
}

export const authReducer = (state = initialState, action: IAuthAction): IAuthState => {
	switch (action.type) {
		case AUTH_REQUEST:
			const emailIsMatch = state.users.some(user => user.email === action.payload.email)
			const userIsMatch = state.users.some(user =>
				user.email === action.payload.email
				&& user.password === action.payload.password)
			const isLoggedIn = () => {
				if (emailIsMatch) return userIsMatch
				return !emailIsMatch
			}
			return {
				users: state.users.some(user => user.email === action.payload.email)
					? state.users
					: [...state.users, action.payload],
				isLoggedIn: isLoggedIn()

			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false
			}

		default:
			return state
	}
}

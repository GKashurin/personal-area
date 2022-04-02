// @ts-ignore
import {ADD_PERSON, DELETE_PERSON, UPDATE_PERSON, EDITABLE_PERSON} from '../actions/tableActions.ts';
import {ITableAction, ITableState} from '../../types';

const initialState = {
	list: [
		{
			id: 0,
			name: 'Иван',
			surname: 'Иванов',
			middleName: 'Иванович',
			birthDate: '14.01.1996',
			position: 'Грузчик',
			phone: '8965455555',
		}
	],
	editPerson: null
}

export const tableReducer = (state = initialState, action: ITableAction): ITableState => {
	switch (action.type) {
		case ADD_PERSON:
			return {
				...state,
				list: [...state.list, action.payload]
			}
		case DELETE_PERSON:
			return {
				...state,
				list: state.list?.filter(person => (person.id !== action.payload.id))
			}
		case UPDATE_PERSON:
			state.list.map(person => {
				if (person.id === action.payload.id) {
					person.name = action.payload.name
					person.surname = action.payload.surname
					person.middleName = action.payload.middleName
					person.birthDate = action.payload.birthDate
					person.position = action.payload.position
					person.phone = action.payload.phone
				}
				return person
			})
			return state
		case EDITABLE_PERSON:
			return {
				...state,
				editPerson: action.payload
			}
		default:
			return state
	}
}
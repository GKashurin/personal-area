import {IPerson} from '../../types';

export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const EDITABLE_PERSON = 'EDITABLE_PERSON';

export const addPerson = (person: IPerson) => ({type: ADD_PERSON, payload: person});
export const deletePerson = (person: IPerson) => ({type: DELETE_PERSON, payload: person});
export const updatePerson = (person: IPerson) => ({type: UPDATE_PERSON, payload: person});
export const editablePerson = (person: IPerson) => ({type: EDITABLE_PERSON, payload: person});
import * as React from 'react'
import {FC} from 'react';
import {useDispatch} from 'react-redux';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
// @ts-ignore
import {deletePerson, editablePerson} from '../redux/actions/tableActions.ts';
import {IRowProps} from '../types';

const Row: FC<IRowProps> = ({person, setIsShowPopup}) => {
	const dispatch = useDispatch();

	return (
		<tr>
			<td>{person.surname}</td>
			<td>{person.name}</td>
			<td>{person.middleName}</td>
			<td>{person.birthDate}</td>
			<td>{person.position}</td>
			<td>{person.phone}</td>
			<td>
				<span className='icon icon_del'>
					<RestoreFromTrashIcon onClick={() => dispatch(deletePerson(person))} />
				</span>
				&nbsp;
				<span className='icon icon_edit'>
					<BorderColorSharpIcon onClick={() => {
						setIsShowPopup(true)
						dispatch(editablePerson(person))
					}} />
				</span>
			</td>
		</tr>
	);
};

export default Row;
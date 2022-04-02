import * as React from 'react'
import {FC, useMemo} from 'react';
import {useSelector} from 'react-redux';
// @ts-ignore
import Row from './Row.tsx';
import {IRootState, ITableProps} from '../types';

const Table: FC<ITableProps> = ({setIsShowPopup}) => {
	const persons = useSelector((state: IRootState) => state.table.list)
	const tableHead = useMemo(() => ['Имя', 'Фамилия', 'Отчество', 'Дата рождения', 'Должность', 'Номер телефона'], [])

	return (
		<table>
			<thead>
			<tr>
				{tableHead.map(item => <th key={item}>{item}</th>)}
			</tr>
			</thead>
			<tbody>
			{persons?.map(person => <Row
				setIsShowPopup={setIsShowPopup}
				person={person}
				key={person.phone}
			/>)}
			</tbody>
		</table>
	);
};

export default Table;
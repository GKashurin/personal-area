import * as React from 'react'
import {FC, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
// @ts-ignore
import Row from './Row.tsx';
import {IRootState, ITableProps} from '../types';
// @ts-ignore
import {useSearchPerson} from '../hooks/useSearchPerson.tsx';

const Table: FC<ITableProps> = ({setIsShowPopup}) => {
	const people = useSelector((state: IRootState) => state.table.list)
	const [query, setQuery] = useState<string>('')
	const tableHead = useMemo(() => ['Фамилия', 'Имя', 'Отчество', 'Дата рождения', 'Должность', 'Номер телефона'], [])
	const searchedPeople = useSearchPerson(people, query)
	return (
		<>
			<input
				className='input'
				type='text'
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				placeholder='Введите фамилию для поиска'
				autoComplete='off'
			/>
			<table>
				<thead>
				<tr>
					{tableHead.map(item => <th key={item}>{item}</th>)}
				</tr>
				</thead>

				<tbody>
				{!!searchedPeople.length
					? searchedPeople.map(person =>
						<Row
							setIsShowPopup={setIsShowPopup}
							person={person}
							key={person.phone}
						/>)
					: <p>Ничего не найдено. Попробуйте изменить условия поиска.</p>}
				</tbody>
			</table>
		</>
	);
};

export default Table;
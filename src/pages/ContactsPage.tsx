import * as React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
// @ts-ignore
import Table from '../components/Table.tsx';
// @ts-ignore
import Popup from '../components/Popup.tsx';
// @ts-ignore
import {logOut} from '../redux/actions/authActions.ts';

const ContactsPage = () => {
	const [isShowPopup, setIsShowPopup] = useState<boolean>(false)
	const navigate = useNavigate()
	const dispatch = useDispatch();

	return (
		<>
			<div className='logout'>
				<button
					className='button button_blue'
					onClick={() => {
						navigate('/')
						dispatch(logOut())
					}}
				>Выйти
				</button>
			</div>
			<div className='addPerson'>
				<button
					className='button'
					onClick={() => setIsShowPopup(true)}
				>Добавить сотрудника
				</button>
			</div>
			<Table setIsShowPopup={setIsShowPopup}/>
			{isShowPopup &&
			<Popup
				isShowPopup={isShowPopup}
				setIsShowPopup={setIsShowPopup}
			/>}
		</>
	);
};

export default ContactsPage;
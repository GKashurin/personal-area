import * as React from 'react'
import {useEffect} from 'react';
import {
	Routes,
	Route,
	useNavigate
} from 'react-router-dom';
import {useSelector} from 'react-redux';
// @ts-ignore
import SignIn from './pages/SignIn.tsx'
// @ts-ignore
import ContactsPage from './pages/ContactsPage.tsx';
import {IRootState} from './types';

const App = () => {
	const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn)
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) navigate('/contacts')
	}, [isLoggedIn])

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<SignIn/>}/>
				<Route path='/contacts' element={<ContactsPage/>}/>
			</Routes>
		</div>
	);
}

export default App;

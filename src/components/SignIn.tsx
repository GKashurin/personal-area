import * as React from 'react'
import {FC, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
// @ts-ignore
import {authRequest} from '../redux/actions/authActions.ts';
import {IRootState} from '../types';

const SignIn: FC = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state: IRootState) => state.auth.isLoggedIn)
	const [isError, setIsError] = useState<boolean>(false)

	const validationSchema = Yup.object().shape({
		email: Yup.string().email('Введите верный email').required('Поле обязательно'),
		password: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
	})

	const handleSubmit = (values) => {
		dispatch(authRequest(values))
		if (!isLoggedIn) setIsError(true)
	}

	return (
		<div className='login'>
			<Formik initialValues={{
				email: '',
				password: '',
			}}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
			>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleSubmit,
					  isValid,
					  dirty
				  }) => (
					<div className='login__form'>
						<h1 className='login__title'>Войти</h1>
						<div className='login__text'>Чтобы войти, введите email и пароль.</div>
						{touched.email && errors.email && <p className='error'>{errors.email}</p>}
						<input
							className='input'
							type='text'
							name='email'
							onChange={handleChange}
							value={values.email}
							placeholder='Адрес электронной почты'
							autoComplete='off'
						/>

						{touched.password && errors.password && <p className='error'>{errors.password}</p>}
						<input
							className='input'
							type='password'
							name='password'
							onChange={handleChange}
							value={values.password}
							placeholder='Пароль'
						/>

						<button
							className='button'
							disabled={!isValid && !dirty}
							onClick={() => handleSubmit()}
							type='submit'
						>Войти
						</button>
					</div>
				)}
			</Formik>
			{isError && <p className='error'>Вход не выполнен. Попробуйте другую почту или пароль.</p>}
		</div>
	)
}

export default SignIn
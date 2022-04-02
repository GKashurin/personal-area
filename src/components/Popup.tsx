import * as React from 'react'
import {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
// @ts-ignore
import {addPerson, editablePerson, updatePerson} from '../redux/actions/tableActions.ts';
import {IPopupProps, IRootState} from '../types';

const Popup: FC<IPopupProps> = ({isShowPopup, setIsShowPopup}) => {
	const editPerson = useSelector((state: IRootState) => state.table.editPerson)
	const [isStartAnimation, setIsStartAnimation] = useState<boolean>(false)
	const [isDateSelected, setIsDateSelected] = useState<boolean>(false)
	const dispatch = useDispatch()

	const closePopup = () => {
		dispatch(editablePerson(null))
		setIsStartAnimation(true)
		setTimeout(() => setIsShowPopup(false), 595)
	}

	const handleSubmit = (values) => {
		editPerson && !!editPerson.surname ? dispatch(updatePerson({
			...values,
			id: editPerson.id
		})) : dispatch(addPerson({
			...values,
			id: Date.now()
		}))
		closePopup()
	}

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
	const validationSchema = Yup.object().shape({
		surname: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
		phone: Yup.string().matches(phoneRegExp, 'Введите верный номер телефона').required('Поле обязательно'),
	})

	return (
		<div className='popup'>
			<div
				className={isShowPopup && !isStartAnimation ? 'popup__container' : 'popup__container popup__container_closed'}>
				<Formik initialValues={{
					name: editPerson ? editPerson.name : '',
					surname: editPerson ? editPerson.surname : '',
					middleName: editPerson ? editPerson.middleName : '',
					birthDate: editPerson ? editPerson.birthDate : '',
					position: editPerson ? editPerson.position : '',
					phone: editPerson ? editPerson.phone : '',
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
						<div>
							<input
								name='name'
								type='text'
								className='input'
								placeholder='Имя'
								onChange={handleChange}
								value={values.name}
								autoComplete='off'
							/>
							{touched.surname && errors.surname && <p className='error'>{errors.surname}</p>}
							<input
								name='surname'
								type='text'
								className='input'
								placeholder='Фамилия*'
								onChange={handleChange}
								value={values.surname}
								autoComplete='off'
							/>
							<input
								name='middleName'
								type='text'
								className='input'
								placeholder='Отчество'
								onChange={handleChange}
								value={values.middleName}
								autoComplete='off'
							/>
							<input
								name='birthDate'
								type={isDateSelected ? 'date' : 'text'}
								className='input'
								placeholder='Дата рождения'
								onFocus={() => setIsDateSelected(true)}
								onBlur={() => setIsDateSelected(false)}
								onChange={handleChange}
								value={values.birthDate}
								autoComplete='off'
							/>
							<input
								name='position'
								type='text'
								className='input'
								placeholder='Должность'
								onChange={handleChange}
								value={values.position}
								autoComplete='off'
							/>
							{touched.phone && errors.phone && <p className='error'>{errors.phone}</p>}
							<input
								name='phone'
								type='tel'
								className='input'
								placeholder='Телефон*'
								onChange={handleChange}
								value={values.phone}
								autoComplete='off'
							/>
							<div className='form-buttons-wrapper'>
								<button
									onClick={closePopup}
									className='button button_white'
								>Отменить
								</button>
								<button
									className='button button_blue'
									onClick={() => handleSubmit()}
									disabled={!isValid && !dirty}
								>Сохранить
								</button>
							</div>
						</div>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default Popup;
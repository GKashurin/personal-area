// state:
export interface IRootState {
	table: ITableState
	auth: IAuthState,
}

export interface IAuthState {
	isLoggedIn: boolean,
	users: Array<IUser>
}

export interface ITableState {
	list: Array<IPerson>,
	editPerson: null | IPerson
}

// actions:
export interface IAuthAction {
	type: string,
	payload?: IUser
}

export interface ITableAction {
	type: string,
	payload: IPerson
}

// entities:
export interface IUser {
	email: string,
	password: string
}

export interface IPerson {
	id: number,
	name?: string,
	surname: string,
	middleName?: string,
	birthDate?: string,
	position?: string,
	phone: string,
}

// props:
export interface IPopupProps {
	isShowPopup: boolean,
	setIsShowPopup: (isShowPopup: boolean) => void
}

export interface IRowProps {
	person: IPerson,
	setIsShowPopup: (isShowPopup: boolean) => void
}
export interface ITableProps {
	setIsShowPopup: (isShowPopup: boolean) => void
}
export interface IUser {
	appointements: Array<IAppointment>;
	fname: string;
	username: string;
	_id: string;
}

export interface IAppointment {
	created: string;
	scheduled: string;
	client: IUser;
	_id: string;
}

export interface ICredentials {
	username: string;
	password: string;
}

export interface IRegisterCred extends ICredentials {
	fname: string;
}

export interface PropsWithUser {
	user: IUser;
}

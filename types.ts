export interface IUser {
	appointements: Array<unknown>;
	fname: string;
	username: string;
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

export interface IUser {
	appointements: Array<unknown>;
	fname: string;
	username: string;
}

export interface ICredentials {
	username: string;
	password: string;
}

export interface IRegisterCred extends ICredentials {
	fname: string;
}

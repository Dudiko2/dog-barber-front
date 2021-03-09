import axios from "axios";

import { ICredentials, IRegisterCred, IUser } from "../types";

const api = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

export const loginUser = (credentials: ICredentials) =>
	api.post<IUser>("/login", credentials);

export const registerUser = (credentials: IRegisterCred) =>
	api.post<IUser>("/clients", credentials);

export default api;

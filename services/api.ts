import axios from "axios";

import { ICredentials, IUser } from "../types";

const api = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

export const loginUser = (credentials: ICredentials) =>
	api.post<IUser>("/login", credentials);

export default api;

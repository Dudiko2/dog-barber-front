import axios from "axios";

interface ICredentials {
	username: string;
	password: string;
}

const api = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

export const loginUser = (credentials: ICredentials) =>
	api.post("/login", credentials);

export default api;

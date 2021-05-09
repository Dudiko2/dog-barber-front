import axios from "axios";

import { IAppointment, ICredentials, IRegisterCred, IUser } from "../types";

const APPOINTMENT_ROUTE = "/appointments";

const api = axios.create({
	baseURL: "http://localhost:5000",
	withCredentials: true,
});

export const loginUser = (credentials: ICredentials) =>
	api.post<IUser>("/login", credentials);

export const registerUser = (credentials: IRegisterCred) =>
	api.post<IUser>("/clients", credentials);

export const deleteAppointment = (id: string) =>
	api.delete(APPOINTMENT_ROUTE, { data: { id } });

export const editAppointment = (appointment: IAppointment) =>
	api.put<IAppointment>(APPOINTMENT_ROUTE, {
		id: appointment._id,
		scheduled: appointment.scheduled,
	});

export default api;

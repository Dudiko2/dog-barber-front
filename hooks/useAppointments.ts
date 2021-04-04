import useSWR, { mutate } from "swr";
import api from "../services/api";

const fetcher = (url: string) => api.get<any>(url).then((res) => res.data);
const key = "/appointments";

const useAppointments = () => {
	const { data, error } = useSWR(key, fetcher, {
		shouldRetryOnError: false,
		revalidateOnFocus: false,
	});

	return {
		appointments: data,
		isLoading: !error && !data,
		error,
	};
};

export const revalidateAppointments = () => mutate(key);

export default useAppointments;

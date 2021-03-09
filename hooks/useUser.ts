import useSWR from "swr";
import api from "../services/api";

import { IUser } from "../types";

const fetcher = (url: string) => api.get<IUser>(url).then((res) => res.data);

const useUser = () => {
	const { data, error } = useSWR("/clients/me", fetcher, {
		shouldRetryOnError: false,
		revalidateOnFocus: false,
	});

	return {
		user: data,
		isLoading: !error && !data,
		error,
	};
};

export default useUser;

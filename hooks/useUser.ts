import useSWR from "swr";
import api from "../services/api";

const fetcher = (url) => api.get(url).then((res) => res.data);

const useUser = () => {
	const { data, error } = useSWR("/clients/me", fetcher, {
		shouldRetryOnError: false,
	});

	return {
		user: data,
		isLoading: !error && !data,
		error,
	};
};

export default useUser;

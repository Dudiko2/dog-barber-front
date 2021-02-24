import useSwr from "swr";

const fetcher = async (url: string) => {
	console.log(url);
	const res = await fetch(url, { credentials: "include" });

	const data = await res.json();

	return {
		...data,
		authenticated: res.ok,
	};
};

const useUser = () => {
	const key = "/api/clients/me";
	const { data, error, mutate } = useSwr(key, fetcher, {
		revalidateOnFocus: false,
	});

	return {
		user: data,
		error,
		loading: !error && !data,
		revalidateUser: () => mutate(key),
	};
};

export default useUser;

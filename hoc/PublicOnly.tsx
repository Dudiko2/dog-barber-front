import { useRouter } from "next/router";
import PageSpinner from "../components/PageSpinner";
import useUser from "../hooks/useUser";

import { FC } from "react";

const PublicOnly = (Page: FC) => {
	return () => {
		const { user, isLoading, error } = useUser();
		const router = useRouter();

		if (!isLoading && user) router.push("/");

		if (isLoading || user) return <PageSpinner />;
		else return <Page />;
	};
};

export default PublicOnly;

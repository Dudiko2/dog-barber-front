import { useRouter } from "next/router";
import PageSpinner from "../components/PageSpinner";
import useUser from "../hooks/useUser";

import { FC } from "react";
import { PagePropsWithUser } from "../types";

const Protected = (Page: FC<PagePropsWithUser>) => {
	return () => {
		const { user, isLoading, error } = useUser();
		const router = useRouter();

		if (!user && !isLoading) router.push("/login");

		if (isLoading || error) return <PageSpinner />;

		if (user) return <Page user={user} />;
	};
};

export default Protected;

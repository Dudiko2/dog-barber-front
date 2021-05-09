import { useRouter } from "next/router";
import PageSpinner from "../components/PageSpinner";
import LogoutButton from "../components/LogoutButton";
import useUser from "../hooks/useUser";

import { FC } from "react";
import { PropsWithUser } from "../types";

const Protected = (Page: FC<PropsWithUser>) => {
	return () => {
		const { user, isLoading, error } = useUser();
		const router = useRouter();

		if (!user && !isLoading) router.push("/login");

		if (isLoading || error) return <PageSpinner />;

		if (user)
			return (
				<>
					<LogoutButton />
					<Page user={user} />
				</>
			);
	};
};

export default Protected;

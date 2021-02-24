import { FC } from "react";

import { AuthProvider } from "../context/auth";
import useUser from "../hooks/useUser";

const WithAuth: FC = ({ children }) => {
	const user = useUser();

	return <AuthProvider value={{ user: "dudi" }}>{children}</AuthProvider>;
};

export default WithAuth;

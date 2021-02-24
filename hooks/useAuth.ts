import { useContext } from "react";
import AuthContext from "../context/auth";

const useAuth = () => {
	const ctx = useContext(AuthContext);

	return ctx;
};

export default useAuth;

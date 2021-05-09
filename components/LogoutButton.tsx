import { Button } from "antd";
import { logoutUser } from "../services/api";
import { useRouter } from "next/router";

import { CSSProperties, FC, useState } from "react";

const LogoutButton: FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const clickHandler = () => {
		setLoading(true);
		logoutUser().finally(() => router.reload());
		setLoading(false);
	};

	const styles: CSSProperties = {
		position: "absolute",
		right: "2rem",
		top: "1rem",
	};

	return (
		<Button style={styles} onClick={clickHandler} loading={loading}>
			Log Out
		</Button>
	);
};

export default LogoutButton;

import { FC } from "react";
import { Col, Row, Card } from "antd";

import UsersTable from "../components/UsersTable";

import useUser from "../hooks/useUser";
import { useRouter } from "next/router";

const Home: FC = ({}) => {
	const { user, isLoading, error } = useUser();
	const router = useRouter();

	if (!isLoading && !user) router.push("/login");

	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col span={12}>
				{isLoading && <Card>loading</Card>}
				<UsersTable />
			</Col>
		</Row>
	);
};

export default Home;

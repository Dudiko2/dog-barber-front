import { FC } from "react";
import { Col, Row, Spin } from "antd";

import UsersTable from "../components/UsersTable";
import Protected from "../hoc/Protected";

import { PropsWithUser } from "../types";

interface HomeProps extends PropsWithUser {}

const Home: FC<HomeProps> = ({ user }) => {
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col span={12}>
				<UsersTable user={user} />
			</Col>
		</Row>
	);
};

export default Protected(Home);

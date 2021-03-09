import { FC } from "react";
import { Col, Row, Spin } from "antd";

import UsersTable from "../components/UsersTable";
import Protected from "../hoc/Protected";

import { IUser } from "../types";

const Home: FC<{ user: IUser }> = ({ user }) => {
	console.log(user);
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col span={12}>
				<UsersTable />
			</Col>
		</Row>
	);
};

export default Protected(Home);

import { FC } from "react";
import { Col, Row, Spin } from "antd";

import UsersTable from "../components/UsersTable";
import Protected from "../hoc/Protected";

import { IUser } from "../types";

interface HomeProps {
	user: IUser;
}

const Home: FC<HomeProps> = ({ user }) => {
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col span={12}>
				<UsersTable />
			</Col>
		</Row>
	);
};

export default Protected(Home);

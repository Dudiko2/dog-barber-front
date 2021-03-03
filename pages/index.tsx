import { FC } from "react";
import { Col, Row } from "antd";

import UsersTable from "../components/UsersTable";

const Home: FC = ({}) => {
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col span={12}>
				<UsersTable />
			</Col>
		</Row>
	);
};

export default Home;

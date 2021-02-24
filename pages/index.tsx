import { FC, useContext, useEffect } from "react";
import { Card, Col, Row, Spin } from "antd";

import useAuth from "../hooks/useAuth";

const Home: FC = ({}) => {
	const ctx = useAuth();

	return (
		<Row>
			<Col>
				<Card>Hello {ctx.user}</Card>;
			</Col>
		</Row>
	);
};

export default Home;

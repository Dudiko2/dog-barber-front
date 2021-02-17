import { FC, useEffect } from "react";
import { Card, Col, Row, Spin } from "antd";

import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const Home: FC = ({}) => {
	return (
		<Row>
			<Col>
				<Card>Hello</Card>;
			</Col>
		</Row>
	);
};

export default Home;

import { FC } from "react";
import { Row, Col, Spin } from "antd";

const PageSpinner: FC = () => {
	return (
		<Row
			justify="center"
			align="middle"
			style={{ minHeight: "100vh", textAlign: "center" }}
		>
			<Col>
				<Spin size="large" />
			</Col>
		</Row>
	);
};

export default PageSpinner;

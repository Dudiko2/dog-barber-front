import { FC } from "react";
import Link from "next/link";
import { Form, Input, Button, Row, Col, Card, Divider, message } from "antd";

import { loginUser } from "../services/api";
import PublicOnly from "../hoc/PublicOnly";

import { ICredentials } from "../types";
import { revalidateUser } from "../hooks/useUser";

const Login: FC = () => {
	return (
		<Row align={"middle"} justify={"center"} style={{ height: "100vh" }}>
			<Col span={6}>
				<Card>
					<Row
						style={{
							fontSize: "1.4rem",
							fontWeight: "bold",
							marginBottom: "1rem",
						}}
					>
						<Col>Hello</Col>
					</Row>
					<LoginForm />
					<Divider />
					<Row justify="center">
						<Col>
							Don't have an account?
							<Link href="/register">
								<a> Register</a>
							</Link>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

const LoginForm: FC = () => {
	const handleSubmit = async (values: ICredentials) => {
		try {
			await loginUser(values);
			revalidateUser();
		} catch (e) {
			message.error("Unable to connect");
		}
	};

	return (
		<Form name="login-form" size="large" onFinish={handleSubmit}>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Please provide a username" }]}
			>
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[{ required: true, message: "Please provide a password" }]}
			>
				<Input type="password" placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{
						width: "100%",
						fontWeight: "bold",
						textTransform: "uppercase",
					}}
				>
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PublicOnly(Login);

import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Form, Input, Button, Row, Col, Card, Divider } from "antd";

import { loginUser } from "../services/auth";

interface FormProps {
	submitForm: typeof loginUser;
}

const Login: FC = () => {
	const router = useRouter();

	return (
		<Row align={"middle"} justify={"center"} style={{ height: "100vh" }}>
			<Col span={6}>
				<Card>
					<Row>
						<Col>
							<div
								style={{
									fontSize: "1.4rem",
									fontWeight: "bold",
									marginBottom: "1rem",
								}}
							>
								Hello
							</div>
						</Col>
					</Row>
					<LoginForm submitForm={loginUser} />
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

const LoginForm: FC<FormProps> = ({ submitForm }) => {
	return (
		<Form name="login-form" size="large" onFinish={submitForm}>
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

export default Login;

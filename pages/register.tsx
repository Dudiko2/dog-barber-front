import { FC } from "react";
import Link from "next/link";
import { Row, Col, Card, Divider, Form, Input, Button, message } from "antd";
import PublicOnly from "../hoc/PublicOnly";
import { registerUser } from "../services/api";

import { IRegisterCred } from "../types";
import { revalidateUser } from "../hooks/useUser";

const Register: FC = () => {
	return (
		<Row align={"middle"} justify={"center"} style={{ height: "100vh" }}>
			<Col span={6}>
				<Card>
					<Row style={{ marginBottom: "1rem" }}>
						<Col>
							<Row
								style={{
									fontSize: "1.4rem",
									fontWeight: "bold",
								}}
							>
								<Col>Register</Col>
							</Row>
							Please fill in the fields below
						</Col>
					</Row>
					<RegistrationForm />
					<Divider />
					<Row justify="center">
						<Col>
							Already a member?
							<Link href="/login">
								<a>Log in</a>
							</Link>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

const RegistrationForm: FC = () => {
	const submitForm = async (values: IRegisterCred) => {
		const { fname, username, password } = values;
		try {
			await registerUser({ fname, username, password });
			revalidateUser();
		} catch (e) {
			message.error("Something went wrong!");
		}
	};

	return (
		<Form name="registration-form" size="large" onFinish={submitForm}>
			<Form.Item
				name="fname"
				rules={[{ required: true, message: "Please provide your name" }]}
			>
				<Input placeholder="First name" />
			</Form.Item>
			<Form.Item
				name="username"
				rules={[{ required: true, message: "Please provide a username" }]}
			>
				<Input placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{ required: true, message: "Please provide a password" },
					{
						type: "string",
						min: 8,
						message: "Password must have at least 8 characters",
					},
				]}
				hasFeedback
			>
				<Input type="password" placeholder="Password" />
			</Form.Item>
			<Form.Item
				name="confirmPassword"
				dependencies={["password"]}
				hasFeedback
				rules={[
					{ required: true, message: "Please confirm your password" },
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue("password") === value)
								return Promise.resolve();

							return Promise.reject("The 2 password do not match");
						},
					}),
				]}
			>
				<Input type="password" placeholder="Confirm password" />
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
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PublicOnly(Register);

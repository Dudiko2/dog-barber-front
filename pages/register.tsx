import { FC } from "react";
import Link from "next/link";
import { Row, Col, Card, Divider, Form, Input, Button } from "antd";

interface RegisterValues {
	fname: string;
	username: string;
	password: string;
	confirmPassword: string;
}

const Register: FC = () => {
	return (
		<Row align={"middle"} justify={"center"} style={{ height: "100vh" }}>
			<Col span={6}>
				<Card>
					<Row>
						<Col>
							<div style={{ marginBottom: "1rem" }}>
								<div
									style={{
										fontSize: "1.4rem",
										fontWeight: "bold",
									}}
								>
									Register
								</div>
								<p>Please fill in the fields below</p>
							</div>
						</Col>
					</Row>
					<RegistrationForm />
					<Divider />
					<Row justify="center">
						<Col>
							Already a member?
							<Link href="/login">
								<a> Log in</a>
							</Link>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

const RegistrationForm: FC = () => {
	const submitForm = (values: RegisterValues) => {
		console.log(values);
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

export default Register;
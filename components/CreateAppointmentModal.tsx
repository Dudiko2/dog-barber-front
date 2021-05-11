import { FC, useState } from "react";
import { Modal, Form, DatePicker, message } from "antd";
import { createAppointment } from "../services/api";
import { revalidateAppointments } from "../hooks/useAppointments";

interface ModalProps {
	isOpen: boolean;
	close: () => void;
}

const CreateAppointmentModal: FC<ModalProps> = ({ isOpen, close }) => {
	const [formInstance] = Form.useForm();
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		setConfirmLoading(true);
		try {
			const values = await formInstance.validateFields();
			const momentDateStr = values.scheduled.utc().format();
			const dateStr = new Date(momentDateStr).toUTCString();

			await createAppointment(dateStr);
			await revalidateAppointments();
		} catch (e) {
			message.error("Something went wrong");
		}
		setConfirmLoading(false);
		close();
	};

	const handleCancel = () => {
		formInstance.resetFields();
		close();
	};

	return (
		<Modal
			visible={isOpen}
			onCancel={handleCancel}
			onOk={handleOk}
			okText="Submit"
			title="Create Appointment"
			confirmLoading={confirmLoading}
		>
			<Form form={formInstance} name="createAppointment">
				<Form.Item
					label="Scheduled to"
					name="scheduled"
					required
					rules={[
						{
							type: "object" as const,
							required: true,
							message: "Please select time",
						},
					]}
				>
					<DatePicker showTime showSecond={false} showNow />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CreateAppointmentModal;

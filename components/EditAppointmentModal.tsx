import { Form, Modal, DatePicker, message } from "antd";
import { FC, useState } from "react";

import { revalidateAppointments } from "../hooks/useAppointments";
import { editAppointment } from "../services/api";
import { IAppointment } from "../types";

interface ModalProps {
	isOpen: boolean;
	appointment: IAppointment;
	close: () => void;
	afterClose?: () => void;
}

const EditAppointmentModal: FC<ModalProps> = ({
	isOpen,
	close,
	appointment,
	afterClose,
}) => {
	const [formInstance] = Form.useForm();
	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleOk = async () => {
		setConfirmLoading(true);
		try {
			const values = await formInstance.validateFields();
			const momentDateStr = values.scheduled.utc().format();

			await editAppointment({
				...appointment,
				scheduled: new Date(momentDateStr).toUTCString(),
			});
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
			okText="Submit"
			title="Edit appointment"
			onOk={handleOk}
			onCancel={handleCancel}
			afterClose={afterClose}
			confirmLoading={confirmLoading}
		>
			<Form form={formInstance} name="editAppointmentForm">
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

export default EditAppointmentModal;

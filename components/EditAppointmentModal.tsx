import { Form, Modal, DatePicker } from "antd";
import { FC } from "react";
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
	const handleOk = async () => {
		try {
			const values = await formInstance.validateFields();
			// convert the Moment object to a string
			const dateUTCStr = values.scheduled.utc().format();
			// make http request here

			// revalidate appointments
			console.log("submitted");
			close();
		} catch (e) {}
	};

	const handleCancel = () => {
		formInstance.resetFields();
		close();
	};

	console.log(appointment);

	return (
		<Modal
			visible={isOpen}
			okText="Submit"
			title="Edit appointment"
			onOk={handleOk}
			onCancel={handleCancel}
			afterClose={afterClose}
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
					<DatePicker showTime={true} showSecond={false} />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default EditAppointmentModal;

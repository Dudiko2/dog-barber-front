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
	const submitForm = () => {
		// formInstance.submit()

		console.log("submitted");
		close();
	};

	const handleCancel = () => {
		// clean
		close();
	};

	console.log(appointment);

	return (
		<Modal
			visible={isOpen}
			okText="Submit"
			title="Edit appointment"
			onOk={submitForm}
			onCancel={handleCancel}
			afterClose={afterClose}
		>
			<Form form={formInstance}>
				<Form.Item label="Scheduled to">
					<DatePicker
						showTime={true}
						onChange={(m, d) => {
							console.log(m);
							console.log(d);
						}}
					/>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default EditAppointmentModal;

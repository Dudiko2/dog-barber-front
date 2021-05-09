import { FC, useState } from "react";
import { Col, Row, Modal, message } from "antd";

import AppointmentsTable from "../components/AppointmentsTable";
import Protected from "../hoc/Protected";
import EditAppointmentModal from "../components/EditAppointmentModal";
import useAppointments, {
	revalidateAppointments,
} from "../hooks/useAppointments";
import { deleteAppointment } from "../services/api";

import { IAppointment, PropsWithUser } from "../types";

interface HomeProps extends PropsWithUser {}

const { confirm } = Modal;

const Home: FC<HomeProps> = ({ user }) => {
	const { appointments, isLoading: loadingAppointments } = useAppointments();
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
		null
	);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const onEditHandler = (appointment: IAppointment) => {
		setSelectedAppointment(appointment);
		openModal();
	};

	const onDeleteHandler = (appointment: IAppointment) => {
		confirm({
			title: "Delete an appointment",
			onOk() {
				return deleteAppointment(appointment._id)
					.then(() => revalidateAppointments())
					.catch(() => message.error("Something went wrong!"));
			},
			onCancel() {},
		});
	};

	const modalCleanup = () => {
		setSelectedAppointment(null);
	};

	return (
		<>
			<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
				<Col span={12}>
					<AppointmentsTable
						appointments={appointments}
						isLoading={loadingAppointments}
						user={user}
						onEdit={onEditHandler}
						onDelete={onDeleteHandler}
					/>
				</Col>
			</Row>
			{!!selectedAppointment && (
				<EditAppointmentModal
					isOpen={modalOpen}
					close={closeModal}
					afterClose={modalCleanup}
					appointment={selectedAppointment}
				/>
			)}
		</>
	);
};

export default Protected(Home);

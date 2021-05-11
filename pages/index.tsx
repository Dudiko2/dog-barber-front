import { FC, useState } from "react";
import { Col, Row, Modal, message } from "antd";

import AppointmentsTable from "../components/AppointmentsTable";
import Protected from "../hoc/Protected";
import EditAppointmentModal from "../components/EditAppointmentModal";
import CreateAppointmentModal from "../components/CreateAppointmentModal";
import useAppointments, {
	revalidateAppointments,
} from "../hooks/useAppointments";
import { deleteAppointment } from "../services/api";

import { IAppointment, PropsWithUser } from "../types";

interface HomeProps extends PropsWithUser {}

const { confirm } = Modal;

const Home: FC<HomeProps> = ({ user }) => {
	const { appointments, isLoading: loadingAppointments } = useAppointments();
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [createModalOpen, setCreateModalOpen] = useState(false);
	const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
		null
	);

	const openEditModal = () => setEditModalOpen(true);
	const closeEditModal = () => setEditModalOpen(false);
	const openCreateModal = () => setCreateModalOpen(true);
	const closeCreateModal = () => setCreateModalOpen(false);

	const onCreateHandler = () => {
		openCreateModal();
	};

	const onEditHandler = (appointment: IAppointment) => {
		setSelectedAppointment(appointment);
		openEditModal();
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
						onCreate={onCreateHandler}
						onEdit={onEditHandler}
						onDelete={onDeleteHandler}
					/>
				</Col>
			</Row>
			{!!selectedAppointment && (
				<EditAppointmentModal
					isOpen={editModalOpen}
					close={closeEditModal}
					afterClose={modalCleanup}
					appointment={selectedAppointment}
				/>
			)}
			<CreateAppointmentModal
				isOpen={createModalOpen}
				close={closeCreateModal}
			/>
		</>
	);
};

export default Protected(Home);

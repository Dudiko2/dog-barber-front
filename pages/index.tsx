import { FC, useState } from "react";
import { Col, Row } from "antd";

import AppointmentsTable from "../components/AppointmentsTable";
import Protected from "../hoc/Protected";
import EditAppointmentModal from "../components/EditAppointmentModal";
import useAppointments from "../hooks/useAppointments";

import { IAppointment, PropsWithUser } from "../types";

interface HomeProps extends PropsWithUser {}

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

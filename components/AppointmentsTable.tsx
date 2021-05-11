import { FC } from "react";
import { Table } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import AddAppointmentButton from "./AddAppointmentButton";

import { ColumnsType } from "antd/es/table";
import { PropsWithUser, IAppointment } from "../types";

interface Props extends PropsWithUser {
	isLoading: boolean;
	appointments: IAppointment[];
	onCreate?: () => any;
	onEdit?: (appointment: IAppointment) => any;
	onDelete?: (appointment: IAppointment) => any;
}

const AppointmentsTable: FC<Props> = ({
	user,
	isLoading,
	appointments,
	onCreate,
	onEdit,
	onDelete,
}) => {
	const Buttons = ({ record, onEditClick, onDeleteClick }) => {
		return (
			<>
				<EditButton onClick={() => onEditClick(record)} />
				<DeleteButton onClick={() => onDeleteClick(record)} />
			</>
		);
	};

	const columns: ColumnsType<IAppointment> = [
		{
			title: "Username",
			dataIndex: ["client", "username"],
			key: "username",
		},
		{
			title: "First Name",
			dataIndex: ["client", "fname"],
			key: "fname",
		},
		{
			title: "Scheduled to...",
			dataIndex: "scheduled",
			key: "scheduled",
			render: (date: string) => {
				const obj = new Date(date);

				return obj.toLocaleString();
			},
		},
		{
			title: <AddAppointmentButton onClick={onCreate} />,
			key: "action",
			render: (_, record) => {
				return record.client._id === user._id ? (
					<Buttons
						record={record}
						onEditClick={onEdit}
						onDeleteClick={onDelete}
					/>
				) : (
					""
				);
			},
		},
	];

	return (
		<Table
			columns={columns}
			dataSource={appointments}
			rowKey={(record) => record._id}
			loading={isLoading}
		/>
	);
};

export default AppointmentsTable;

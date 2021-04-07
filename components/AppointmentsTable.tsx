import { FC } from "react";
import { Table } from "antd";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

import { ColumnsType } from "antd/es/table";
import { PropsWithUser, IAppointment } from "../types";

interface Props extends PropsWithUser {
	isLoading: boolean;
	appointments: IAppointment[];
	onEdit?: (appointment: IAppointment) => any;
}

const AppointmentsTable: FC<Props> = ({
	user,
	isLoading,
	appointments,
	onEdit,
}) => {
	const Buttons = ({ record, onEditClick }) => {
		return (
			<>
				<EditButton onClick={() => onEditClick(record)} />
				<DeleteButton />
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
			title: "",
			key: "action",
			render: (_, record) => {
				return record.client._id === user._id ? (
					<Buttons record={record} onEditClick={onEdit} />
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

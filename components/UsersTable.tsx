import { FC } from "react";
import { Table } from "antd";
import useAppointments from "../hooks/useAppointments";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

import { ColumnsType } from "antd/es/table";
import { PropsWithUser } from "../types";

interface Props extends PropsWithUser {}

const UsersTable: FC<Props> = ({ user }) => {
	const { appointments, isLoading: loadingAppointments } = useAppointments();

	const Buttons = () => {
		return (
			<>
				<EditButton />
				<DeleteButton />
			</>
		);
	};

	const columns: ColumnsType<any> = [
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
				return record.client._id === user._id ? <Buttons /> : "";
			},
		},
	];

	return (
		<Table
			columns={columns}
			dataSource={appointments}
			rowKey={(record) => record._id}
			loading={loadingAppointments}
		/>
	);
};

export default UsersTable;

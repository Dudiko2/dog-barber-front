import { FC } from "react";
import { Table } from "antd";

const UsersTable: FC = () => {
	const appointments = [
		{
			_id: "60173499cbd8915554672ff7",
			created: "2012-04-23T18:25:43.511Z",
			scheduled: "2012-04-23T18:25:43.511Z",
			client: {
				appointments: [],
				_id: "6016e5eab395063e931fb787",
				fname: "David",
				username: "david",
			},
			__v: 0,
		},
		{
			_id: "60173499cbd891554672ff7",
			created: "2012-04-23T18:25:43.511Z",
			scheduled: "2012-04-23T18:25:43.511Z",
			client: {
				appointments: [],
				_id: "6016e5eab395063e931fb787",
				fname: "David",
				username: "david",
			},
			__v: 0,
		},
		{
			_id: "6017499cbd8915554672ff7",
			created: "2012-04-23T18:25:43.511Z",
			scheduled: "2012-04-23T18:25:43.511Z",
			client: {
				appointments: [],
				_id: "6016e5eab395063e931fb787",
				fname: "David",
				username: "david",
			},
			__v: 0,
		},
	];

	const columns = [
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
		},
	];

	return (
		<Table
			columns={columns}
			dataSource={appointments}
			rowKey={(record) => record._id}
		/>
	);
};

export default UsersTable;

import { Button } from "antd";
import { FC } from "react";
import { PlusOutlined } from "@ant-design/icons";

const AddButton: FC = () => {
	return (
		<Button type="primary" icon={<PlusOutlined />}>
			New
		</Button>
	);
};

export default AddButton;

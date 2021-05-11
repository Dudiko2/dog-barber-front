import { Button } from "antd";
import { FC } from "react";
import { PlusOutlined } from "@ant-design/icons";

interface ButtonProps {
	onClick: () => any;
}

const AddButton: FC<ButtonProps> = ({ onClick }) => {
	return (
		<Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
			New
		</Button>
	);
};

export default AddButton;

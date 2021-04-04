import { Button } from "antd";
import { EditFilled } from "@ant-design/icons";
import { FC } from "react";

interface Props {
	onClick?: (event: any) => void;
}

const EditButton: FC<Props> = ({ onClick }) => {
	return <Button onClick={onClick} icon={<EditFilled />} />;
};

export default EditButton;

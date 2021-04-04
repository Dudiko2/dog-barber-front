import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";

import { FC } from "react";

interface Props {
	onClick?: (event: any) => void;
}

const DeleteButton: FC<Props> = ({ onClick }) => {
	return <Button onClick={onClick} icon={<DeleteFilled />} />;
};

export default DeleteButton;

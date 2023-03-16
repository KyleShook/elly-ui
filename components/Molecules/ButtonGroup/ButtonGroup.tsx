import React, { FC } from "react";
import PropTypes from "prop-types";
import { GroupContainer } from "./ButtonGroup.styled";

interface ButtonGroupProps {
	children: React.ReactNode;
	sx?: object | undefined;
	pd?: string | undefined;
	width?: string | undefined;
	gap?: string | undefined;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
	children,
	sx,
	pd,
	width,
	gap,
}) => {
	return (
		<GroupContainer role="group" pd={pd} sx={sx} width={width} gap={gap}>
			{children}
		</GroupContainer>
	);
};

ButtonGroup.propTypes = {};

export default ButtonGroup;

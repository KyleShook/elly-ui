import React, { FC } from "react";
import PropTypes from "prop-types";
import { GroupContainer } from "./ButtonGroup.styled";
import Button, { ButtonProps } from "../../Atoms/Button/Button";

interface ButtonGroupProps {
	children: React.ReactElement<ButtonProps>[];
	gap?: string | undefined;
	pd?: string | undefined;
	size?: "small" | "medium" | "large";
	shape?: "square" | "rounded" | "pill";
	btnTypes?: ("fill" | "stroke" | "text" | "icon")[];
	sx?: object | undefined;
	width?: string | undefined;
	noWrap?: boolean;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
	children,
	sx,
	pd,
	width,
	gap,
	noWrap,
	size,
	shape,
	btnTypes = [],
}) => {
	const buttons: React.ReactNode = React.Children.map(
		children,
		(child, index) => {
			const btnType = btnTypes[index] || "fill";
			return React.cloneElement(child, {
				size: child.props.size || size,
				shape: child.props.shape || shape,
				btnType: btnType,
			});
		}
	);
	return (
		<GroupContainer
			role="group"
			pd={pd}
			sx={sx}
			width={width}
			gap={gap}
			noWrap={noWrap}
		>
			{buttons}
		</GroupContainer>
	);
};

ButtonGroup.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	shape: PropTypes.oneOf(["square", "rounded", "pill"]),
	children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
	sx: PropTypes.object,
	pd: PropTypes.string,
	width: PropTypes.string,
	gap: PropTypes.string,
	noWrap: PropTypes.bool,
};

export default ButtonGroup;

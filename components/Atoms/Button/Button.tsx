import React, { FC } from "react";
import PropTypes from "prop-types";
import { ButtonStyles, IconStyles } from "./Button.styled";
import { Icon } from "../Icons/Icon";

export interface ButtonProps {
	children?: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	btnType?: "fill" | "stroke" | "text" | "icon";
	focusColor?: string;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	leftIcon?: boolean;
	rightIcon?: boolean;
	isLoading?: boolean;
	shape?: "square" | "rounded" | "pill";
	bgColor?: string;
	strokeColor?: string;
	textColor?: string;
	underline?: boolean;
	underlineColor?: string;
	status?: "success" | "error" | "warning" | "info" | undefined;
	minWidth?: string;
}

const Button: FC<ButtonProps> = (props) => {
	const {
		children,
		onClick,
		btnType = "fill",
		focusColor = "",
		disabled = false,
		size = "medium",
		fullWidth = false,
		leftIcon = false,
		rightIcon = false,
		isLoading = false,
		shape = "square",
		bgColor = "",
		strokeColor = "",
		textColor = "",
		underline = false,
		underlineColor = textColor,
		status,
		minWidth,
	} = props;

	return (
		<ButtonStyles
			disabled={disabled}
			onClick={onClick}
			btnType={btnType}
			focusColor={focusColor}
			size={size}
			fullWidth={fullWidth}
			isLoading={isLoading}
			shape={shape}
			bgColor={bgColor}
			strokeColor={strokeColor}
			textColor={textColor}
			underline={underline}
			underlineColor={underlineColor}
			status={status}
			minWidth={minWidth}
		>
			{leftIcon && !rightIcon && (
				<IconStyles left={leftIcon}>
					<Icon left={leftIcon} />
				</IconStyles>
			)}
			{isLoading && <Icon isLoading={true} />}
			{!isLoading && children}
			{rightIcon && !leftIcon && (
				<IconStyles right={rightIcon}>
					<Icon right={rightIcon} />
				</IconStyles>
			)}
		</ButtonStyles>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func.isRequired,
	btnType: PropTypes.oneOf(["fill", "stroke", "text", "icon"]),
	focusColor: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	fullWidth: PropTypes.bool,
	leftIcon: PropTypes.bool,
	rightIcon: PropTypes.bool,
	isLoading: PropTypes.bool,
	shape: PropTypes.oneOf(["square", "rounded", "pill"]),
	bgColor: PropTypes.string,
	strokeColor: PropTypes.string,
	textColor: PropTypes.string,
	underline: PropTypes.bool,
	underlineColor: PropTypes.string,
	status: PropTypes.oneOf(["success", "error", "warning", "info"]),
	minWidth: PropTypes.string,
};

export default Button;

import React, { FC } from "react";
import PropTypes from "prop-types";
import { ButtonStyles, IconStyles } from "./Button.styled";
import { Icons } from "../Icons/Icons";

export interface ButtonProps {
	children?: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	btnType?: "fill" | "stroke" | "text" | "icon";
	focusColor?: string;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	leftIcon?: boolean | React.ReactNode;
	rightIcon?: boolean | React.ReactNode;
	icon?: boolean | React.ReactNode;
	isLoading?: boolean;
	shape?: "square" | "rounded" | "pill";
	bgColor?: string;
	strokeColor?: string;
	textColor?: string;
	underline?: boolean;
	underlineColor?: string;
	status?: "success" | "error" | "warning" | "info" | undefined;
	minWidth?: string;
	st?: object | undefined;
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
		icon = false,
		isLoading = false,
		shape = "square",
		bgColor = "",
		strokeColor = "",
		textColor = "",
		underline = false,
		underlineColor = textColor,
		status,
		minWidth,
		st,
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
			st={st}
		>
			{leftIcon && !rightIcon && (
				<IconStyles left={true}>{leftIcon}</IconStyles>
			)}
			{icon && !children ? icon : children}
			{rightIcon && !leftIcon && (
				<IconStyles right={true}>{rightIcon}</IconStyles>
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
	leftIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
	rightIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
	icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
	isLoading: PropTypes.bool,
	shape: PropTypes.oneOf(["square", "rounded", "pill"]),
	bgColor: PropTypes.string,
	strokeColor: PropTypes.string,
	textColor: PropTypes.string,
	underline: PropTypes.bool,
	underlineColor: PropTypes.string,
	status: PropTypes.oneOf(["success", "error", "warning", "info"]),
	minWidth: PropTypes.string,
	st: PropTypes.object,
};

export default Button;

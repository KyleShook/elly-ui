import React, { FC } from "react";
import PropTypes from "prop-types";
import { ButtonStyles, IconStyles } from "./Button.styled";
import { Icon } from "../Icons/Icon";

interface ButtonProps {
	children: React.ReactNode;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	btnType?: "fill" | "stroke" | "text" | "icon";
	focusColor?: string;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	leftIcon?: boolean;
	rightIcon?: boolean;
	isLoading?: boolean;
	shape?: "square" | "rounded" | "pill" | undefined;
	bgColor?: string;
	strokeColor?: string;
	textColor?: string;
	noUnderline?: boolean;
	underlineColor?: string;
	status?: "success" | "error" | "warning" | "info" | undefined;
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
		noUnderline = false,
		underlineColor = textColor,
		status,
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
			noUnderline={noUnderline}
			underlineColor={underlineColor}
			status={status}
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
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	btnType: PropTypes.oneOf(["fill", "stroke", "text", "icon"]),
	focusColor: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	fullWidth: PropTypes.bool,
	leftIcon: PropTypes.bool,
	rightIcon: PropTypes.bool,
	isLoading: PropTypes.bool,
	shape: PropTypes.oneOf(["square", "rounded", "pill", undefined]),
	bgColor: PropTypes.string,
	strokeColor: PropTypes.string,
	textColor: PropTypes.string,
	noUnderline: PropTypes.bool,
	underlineColor: PropTypes.string,
	status: PropTypes.oneOf(["success", "error", "warning", "info", undefined]),
};

export default Button;

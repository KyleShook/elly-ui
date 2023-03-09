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
	loading?: boolean;
	iconPos?: boolean;
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
		loading = false,
	} = props;

	return (
		<ButtonStyles
			disabled={disabled}
			onClick={onClick}
			btnType={btnType}
			focusColor={focusColor}
			size={size}
			fullWidth={fullWidth}
			loading={loading}
		>
			{leftIcon && !rightIcon && (
				<IconStyles>
					<Icon left={true} />
				</IconStyles>
			)}
			{loading && <Icon loading={true} />}
			{!loading && children}
			{rightIcon && !leftIcon && (
				<IconStyles>
					<Icon right={true} />
				</IconStyles>
			)}
		</ButtonStyles>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	// onClick: PropTypes.func.isRequired,
	btnType: PropTypes.oneOf(["fill", "stroke", "text", "icon"]),
	focusColor: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	fullWidth: PropTypes.bool,
	leftIcon: PropTypes.bool,
	rightIcon: PropTypes.bool,
	loading: PropTypes.bool,
};

export default Button;

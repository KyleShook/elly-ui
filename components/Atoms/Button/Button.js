import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles, IconStyles } from "./Button.styled";
import Icon from "../Icons/Icon";

const Button = (props) => {
	const {
		children,
		onClick,
		type,
		focusColor,
		disabled,
		size,
		fullWidth,
		leftIcon,
		rightIcon,
		loading,
	} = props;

	return (
		<ButtonStyles
			disabled={disabled}
			onClick={onClick}
			type={type}
			focusColor={focusColor}
			size={size}
			fullWidth={fullWidth}
			loading={loading}
		>
			{leftIcon && !rightIcon && (
				<IconStyles iconPos={leftIcon}>
					<Icon left />
				</IconStyles>
			)}
			{loading && <Icon loading />}
			{!loading && children}
			{rightIcon && !leftIcon && (
				<IconStyles iconPos={rightIcon}>
					<Icon right />
				</IconStyles>
			)}
		</ButtonStyles>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(["fill", "stroke", "text", "icon"]).isRequired,
	focusColor: PropTypes.string,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "medium", "large"]),
	fullWidth: PropTypes.bool,
	leftIcon: PropTypes.bool,
	rightIcon: PropTypes.bool,
	loading: PropTypes.bool,
};

Button.defaultProps = {
	onClick: () => {},
	type: "fill",
	focusColor: "",
	disabled: false,
	size: "medium",
	fullWidth: false,
	leftIcon: false,
	rightIcon: false,
	loading: false,
};

export default Button;

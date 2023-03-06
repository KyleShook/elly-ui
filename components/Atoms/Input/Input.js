import React from "react";
import PropTypes from "prop-types";
import InputStyles from "./Input.styled";

const Input = (props) => {
	const { placeholder, multiline, textarea, width, height } = props;

	return (
		<InputStyles
			placeholder={placeholder}
			multiline={multiline}
			as={textarea}
			width={width}
			height={height}
		/>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string.isRequired,
	multiline: PropTypes.bool,
	textarea: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};

Input.defaultProps = {
	placeholder: "Enter text",
	multiline: false,
	textarea: null,
	width: "100%",
	height: null,
};

export default Input;

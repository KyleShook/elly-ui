import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

const smallButtonStyles = css`
	font-size: ${fontSize.small};
	padding: 6px 12px;
	min-width: ${(props) => (props.loading ? "92.5px" : "auto")};
	cursor: ${(props) => (props.loading ? "default" : "cursor")};
`;

const mediumButtonStyles = css`
	font-size: ${fontSize.medium};
	padding: 8px 16px;
	min-width: ${(props) => (props.loading ? "110px" : "auto")};
	cursor: ${(props) => (props.loading ? "default" : "cursor")};
`;

const largeButtonStyles = css`
	font-size: ${fontSize.medium};
	padding: 10px 20px;
	min-width: ${(props) => (props.loading ? "118px" : "auto")};
	cursor: ${(props) => (props.loading ? "default" : "cursor")};
`;

export const ButtonStyles = styled.button`
	/* Default button styles */
	background-color: ${colors.white};
	cursor: pointer;
	font-weight: 600;
	display: flex;
	border: none;
	transition: color 0.3s, background-color 0.3s;
	width: ${(props) => (props.fullWidth ? "100%" : "auto")};

	/* Small button styles */
	${(props) => props.size === "small" && smallButtonStyles}

	/* Medium button styles */
	${(props) => props.size === "medium" && mediumButtonStyles}

	/* Large button styles */
	${(props) => props.size === "large" && largeButtonStyles}


	/* Fill button styles */
	${(props) =>
		props.type === "fill" &&
		css`
			background-color: ${colors.primary};
			color: ${colors.white};
			border: none;

			&:hover {
				background-color: ${(props) =>
					props.loading ? colors.primary : colors.black};
			}
		`}

	

	/* Stroke button styles */
	${(props) =>
		props.type === "stroke" &&
		css`
			background-color: ${colors.transparent};
			color: ${colors.secondary};
			border: 2px solid ${colors.secondary};

			&:hover {
				background-color: ${colors.secondary};
				color: ${colors.white};
			}
		`}

	/* Text button styles */
	${(props) =>
		props.type === "text" &&
		css`
			background-color: ${colors.transparent};
			color: ${colors.tertiary};

			&:hover {
				background: #f5f5f5;
			}
		`}

	/* Icon button styles */
	${(props) =>
		props.type === "icon" &&
		css`
			background-color: ${colors.primary};
			color: ${colors.white};

			&:hover {
				background-color: ${colors.black};
			}
		`}

	&:focus-visible {
		outline: 2px solid
			${(props) => (props.focusColor ? props.focusColor : colors.primary)};
		outline-offset: 2.5px;
	}

	/* Disabled button styles */
	${(props) =>
		props.disabled &&
		css`
			background-color: ${colors.gray};
			color: ${colors.darkGray};
			cursor: not-allowed;

			&:hover {
				background-color: ${colors.gray};
			}
		`}
`;

export const IconStyles = styled.span`
	display: flex;

	${(props) =>
		props.iconPos === "left" &&
		css`
			margin: 0 0.3rem 0 0;
		`}
	${(props) =>
		props.iconPos === "right" &&
		css`
			margin: 0 0 0 0.3rem;
		`}
`;

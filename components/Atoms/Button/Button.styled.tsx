import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

type ButtonProps = {
	size: "small" | "medium" | "large";
	btnType: "fill" | "stroke" | "text" | "icon";
	fullWidth?: boolean;
	focusColor?: string;
	isLoading?: boolean;
	disabled?: boolean;
	shape?: "square" | "rounded" | "pill";
	bgColor?: string;
	strokeColor?: string;
	textColor?: string;
	noUnderline?: boolean;
	underlineColor?: string;
	status?: "success" | "error" | "warning" | "info";
};

type IconProps = {
	left?: boolean;
	right?: boolean;
};

const buttonStatusStyles = {
	success: css<ButtonProps>`
		background-color: ${colors.success};
		color: ${colors.white};
	`,
	error: css<ButtonProps>`
		background-color: ${colors.error};
		color: ${colors.white};
	`,
	warning: css<ButtonProps>`
		background-color: ${colors.warning};
		color: ${colors.white};
	`,
	info: css<ButtonProps>`
		background-color: ${colors.info};
		color: ${colors.white};
	`,
};

const buttonSizeStyles = {
	small: css<ButtonProps>`
		font-size: ${fontSize.small};
		padding: 6px 12px;
		min-width: ${(props) => (props.isLoading ? "92.5px" : "auto")};
	`,
	medium: css<ButtonProps>`
		font-size: ${fontSize.medium};
		padding: 8px 16px;
		min-width: ${(props) => (props.isLoading ? "110px" : "auto")};
	`,
	large: css<ButtonProps>`
		font-size: ${fontSize.medium};
		padding: 10px 20px;
		min-width: ${(props) => (props.isLoading ? "118px" : "auto")};
	`,
};
const buttonTypeStyles = {
	fill: css<ButtonProps>`
		background-color: ${(props) =>
			props.status
				? buttonStatusStyles[props.status]
				: props.bgColor
				? props.bgColor
				: colors.primary};

		color: ${(props) => (props.textColor ? props.textColor : colors.white)};
		border: none;

		&:hover {
			background-color: ${(props) =>
				props.isLoading ? colors.primary : colors.secondary};
		}
	`,
	stroke: css<ButtonProps>`
		background-color: ${(props) =>
			props.bgColor ? props.bgColor : colors.transparent};
		color: ${(props) => (props.textColor ? props.textColor : colors.secondary)};
		border: 2px solid
			${(props) => (props.strokeColor ? props.strokeColor : colors.secondary)};

		&:hover {
			background-color: ${colors.secondary};
			color: ${colors.white};
		}
	`,
	text: css<ButtonProps>`
		background-color: ${(props) =>
			props.bgColor ? props.bgColor : colors.transparent};
		color: ${(props) => (props.textColor ? props.textColor : colors.tertiary)};
		text-decoration: ${(props) => (props.noUnderline ? "none" : "underline")};
		text-underline-offset: 2px;
		text-decoration-color: ${(props) =>
			props.underlineColor ? props.underlineColor : colors.tertiary};

		&:hover {
			background: ${colors.secondary};
			color: ${colors.white};
		}
	`,
	icon: css<ButtonProps>`
		background-color: ${(props) =>
			props.bgColor ? props.bgColor : colors.primary};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.secondary};
		}
	`,
};

const buttonShapeStyles = {
	square: css<ButtonProps>`
		border-radius: 0;
	`,
	rounded: css<ButtonProps>`
		border-radius: 4px;
	`,
	pill: css<ButtonProps>`
		border-radius: 100px;
	`,
	undefined: css<ButtonProps>`
		border-radius: 0;
	`,
};

export const ButtonStyles = styled.button<ButtonProps>`
	/* Default button styles */
	cursor: pointer;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	transition: color 0.3s, background-color 0.3s;
	width: ${(props) => (props.fullWidth ? "100%" : "auto")};
	cursor: ${(props) => (props.isLoading ? "default" : "pointer")};

	/* Button size styles */
	${({ size }) => buttonSizeStyles[size]}

	/* Button type styles */
  	${({ btnType }) => buttonTypeStyles[btnType]}

	/* Button shape styles */
	${({ shape }) => shape && buttonShapeStyles[shape]}

	/* Button status styles */
	${({ status }) => status && buttonStatusStyles[status]}


	/* Button focus styles */
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
export const IconStyles = styled.span<IconProps>`
	display: flex;

	${(props) =>
		props.left &&
		css`
			margin-right: 0.3rem;
		`}

	${(props) =>
		props.right &&
		css`
			margin-left: 0.3rem;
		`}
`;
//# sourceMappingURL=Button.styled.js.map

import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

type ButtonProps = {
	size: "small" | "medium" | "large";
	btnType: "fill" | "stroke" | "text" | "icon";
	fullWidth?: boolean;
	focusColor?: string;
	loading?: boolean;
	disabled?: boolean;
};

type IconProps = {
	left?: boolean;
	right?: boolean;
	loading?: boolean;
};

const buttonSizeStyles = {
	small: css<ButtonProps>`
		font-size: ${fontSize.small};
		padding: 6px 12px;
		min-width: ${(props) => (props.loading ? "92.5px" : "auto")};
	`,
	medium: css<ButtonProps>`
		font-size: ${fontSize.medium};
		padding: 8px 16px;
		min-width: ${(props) => (props.loading ? "110px" : "auto")};
	`,
	large: css<ButtonProps>`
		font-size: ${fontSize.medium};
		padding: 10px 20px;
		min-width: ${(props) => (props.loading ? "118px" : "auto")};
	`,
};
const buttonTypeStyles = {
	fill: css<ButtonProps>`
		background-color: ${colors.primary};
		color: ${colors.white};
		border: none;

		&:hover {
			background-color: ${(props) =>
				props.loading ? colors.primary : colors.black};
		}
	`,
	stroke: css<ButtonProps>`
		background-color: ${colors.transparent};
		color: ${colors.secondary};
		border: 2px solid ${colors.secondary};

		&:hover {
			background-color: ${colors.secondary};
			color: ${colors.white};
		}
	`,
	text: css<ButtonProps>`
		background-color: ${colors.transparent};
		color: ${colors.tertiary};

		&:hover {
			background: #f5f5f5;
		}
	`,
	icon: css<ButtonProps>`
		background-color: ${colors.primary};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.black};
		}
	`,
};
export const ButtonStyles = styled.button<ButtonProps>`
	/* Default button styles */
	background-color: ${colors.white};
	cursor: pointer;
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	transition: color 0.3s, background-color 0.3s;
	width: ${(props) => (props.fullWidth ? "100%" : "auto")};
	cursor: ${(props) => (props.loading ? "default" : "pointer")};

	/* Button size styles */
	${({ size }) => buttonSizeStyles[size]}

	/* Button type styles */
  	${({ btnType }) => buttonTypeStyles[btnType]}


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

	/* margin: 0 0.3rem 0 0; */
`;
//# sourceMappingURL=Button.styled.js.map

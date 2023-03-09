import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

const buttonSizeStyles = {
	small: css`
		font-size: ${fontSize.small};
		padding: 6px 12px;
		min-width: ${(props) => (props.loading ? "92.5px" : "auto")};
	`,
	medium: css`
		font-size: ${fontSize.medium};
		padding: 8px 16px;
		min-width: ${(props) => (props.loading ? "110px" : "auto")};
	`,
	large: css`
		font-size: ${fontSize.medium};
		padding: 10px 20px;
		min-width: ${(props) => (props.loading ? "118px" : "auto")};
	`,
};

const buttonTypeStyles = {
	fill: css`
		background-color: ${colors.primary};
		color: ${colors.white};
		border: none;

		&:hover {
			background-color: ${(props) =>
				props.loading ? colors.primary : colors.black};
		}
	`,
	stroke: css`
		background-color: ${colors.transparent};
		color: ${colors.secondary};
		border: 2px solid ${colors.secondary};

		&:hover {
			background-color: ${colors.secondary};
			color: ${colors.white};
		}
	`,
	text: css`
		background-color: ${colors.transparent};
		color: ${colors.tertiary};

		&:hover {
			background: #f5f5f5;
		}
	`,
	icon: css`
		background-color: ${colors.primary};
		color: ${colors.white};

		&:hover {
			background-color: ${colors.black};
		}
	`,
};

export const ButtonStyles = styled.button`
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
  	${({ type }) => buttonTypeStyles[type]}


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

export const IconStyles = styled.span`
	display: flex;

	${({ iconPos }) =>
		iconPos === "left"
			? css`
					margin: 0 0.3rem 0 0;
			  `
			: css`
					margin: 0 0 0 0.3rem;
			  `}
`;

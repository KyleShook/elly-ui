import styled, { css } from "styled-components";
import { ReactSVG } from "react-svg";

type IconProps = {
	size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
	color?: string;
	st?: object | undefined;
	isLoading?: boolean;
};

const iconSizeStyles = {
	sm: css<IconProps>`
		width: 20px;
		height: 20px;
	`,
	md: css<IconProps>`
		width: 24px;
		height: 24px;
	`,
	lg: css<IconProps>`
		width: 28px;
		height: 28px;
	`,
	xl: css<IconProps>`
		width: 32px;
		height: 32px;
	`,
	xxl: css<IconProps>`
		width: 36px;
		height: 36px;
	`,
	xxxl: css<IconProps>`
		width: 40px;
		height: 40px;
	`,
};

export const IconStyled = styled(ReactSVG)<IconProps>`
	${({ size }) => size && iconSizeStyles[size]}

	& svg > * {
		${({ color }) => color && `color: ${color};`}
	}
	& svg {
		display: inline-block;
		${({ size }) => size && iconSizeStyles[size]}
	}

	${(props) => props.isLoading && `animation: rotate 1s linear infinite;`}

	${(props) => props.st && (props.st as any)};
`;

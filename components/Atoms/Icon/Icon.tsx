import React, { FC } from "react";
import PropTypes from "prop-types";
import { IconStyled } from "./Icon.styled";

export interface IconProps {
	size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
	color?: string;
	name: string;
	alt: string;
	onClick?: () => void;
	st?: object | undefined;
	isLoading?: boolean;
}

const Icon: FC<IconProps> = (props) => {
	const {
		name,
		size = "md",
		color = "black",
		alt,
		onClick,
		st,
		isLoading,
	} = props;
	// Convert camelCase to kebab-case for icon file name
	// ie. "arrowRight" to "arrow-right"
	const nameDash = name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

	return (
		<IconStyled
			size={size}
			color={color}
			src={`/icons/${nameDash}.svg`}
			desc={alt}
			onClick={onClick}
			st={st}
			isLoading={isLoading}
		/>
	);
};

Icon.propTypes = {
	size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl", "xxxl"]),
	color: PropTypes.string,
	name: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	st: PropTypes.object,
	isLoading: PropTypes.bool,
};

export default Icon;

import { FC } from "react";
import { AnimatedLoadingIconContainer } from "./Icon.styled";
interface IconProps {
	left?: boolean;
	right?: boolean;
	loading?: boolean;
}

const Icon: FC<IconProps> = ({
	left = false,
	right = false,
	loading = false,
}) => {
	return (
		<>
			{loading && (
				<AnimatedLoadingIconContainer>
					<LoadingIcon />
				</AnimatedLoadingIconContainer>
			)}
			{!loading && left && !right && <LeftArrowIcon />}
			{!loading && right && !left && <RightArrowIcon />}
		</>
	);
};

const LeftArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path
				d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"
				style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }}
			/>
		</svg>
	);
};

const RightArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }}
		>
			<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
		</svg>
	);
};

const LoadingIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msFilter: "" }}
		>
			<path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
		</svg>
	);
};

export { Icon, LeftArrowIcon, RightArrowIcon, LoadingIcon };

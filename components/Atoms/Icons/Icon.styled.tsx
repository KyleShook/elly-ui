import styled from "styled-components";

export const AnimatedLoadingIconContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: rotate 1s linear infinite;
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`;

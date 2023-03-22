import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

type ButtonGroupProps = {
	pd?: string | undefined;
	st?: object | undefined;
	width?: string | undefined;
	gap?: string | undefined;
	noWrap?: boolean;
};

export const GroupContainer = styled.div<ButtonGroupProps>`
	display: flex;
	flex-direction: row;
	flex-wrap: ${(props) => (props.noWrap ? "nowrap" : "wrap")};
	justify-content: flex-start;
	gap: ${(props) => (props.gap ? props.gap : "1rem")};
	width: ${(props) => (props.width ? props.width : "fit-content")};

	padding: ${(props) => (props.pd ? props.pd : "0")};

	${(props) => props.st && (props.st as any)};
`;

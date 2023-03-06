import styled, { css } from "styled-components";
import { colors, fontSize } from "@theme";

const InputStyles = styled(({ as: Component = "input", ...props }) => (
	<Component {...props} />
))`
	border: 1px solid ${colors.black};
	padding: 10px;

	/* textarea elements */
	${(props) =>
		props.multiline &&
		`
    width: ${props.width ? props.width : "100%"};
    height: ${props.height ? props.height : "150px"};
  `}
`;

export default InputStyles;

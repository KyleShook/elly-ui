import { Button, RightArrowIcon } from "@components";
import styled from "styled-components";

export default function Home() {
	const StyledSection = styled.section`
		margin: 96px 0 0;

		> * {
			margin: 0 0 12px 0;
		}
	`;

	return (
		<StyledSection>
			<Button>Click Me</Button>
			<Button type="stroke">Click Me</Button>
			<Button type="text">Click Me</Button>
			<Button type="fill" disabled>
				Disabled
			</Button>
			<Button type="fill" loading size="small">
				Disabled
			</Button>
			<Button rightIcon>Next Step</Button>
			<Button leftIcon>Previous Step</Button>
			<Button type="icon" size="small">
				<RightArrowIcon />
			</Button>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
		</StyledSection>
	);
}

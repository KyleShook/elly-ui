import { Button } from "@components";
import styled from "styled-components";

export default function Home() {
	const StyledSection = styled.section`
		margin: 96px 0;

		> * {
			margin: 0 0 12px 0;
		}
	`;

	return (
		<StyledSection>
			<Button>Click Me</Button>
			<Button type="stroke">Click Me</Button>
			<Button type="text">Click Me</Button>
		</StyledSection>
	);
}

import { Button, RightArrowIcon } from "@components/Atoms";
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
			<Button btnType="stroke">Click Me</Button>
			<Button btnType="text">Click Me</Button>
			<Button btnType="fill" disabled>
				Disabled
			</Button>
			<Button btnType="fill" isLoading size="small">
				Disabled
			</Button>
			<Button rightIcon>Next Step</Button>
			<Button leftIcon>Previous Step</Button>
			<Button btnType="icon" size="small">
				<RightArrowIcon />
			</Button>
			<Button size="small">Sm Button</Button>
			<Button size="medium">Md Button</Button>
			<Button size="large">Lg Button</Button>
		</StyledSection>
	);
}

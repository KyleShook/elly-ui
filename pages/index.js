import { Button, RightArrowIcon } from "@components/Atoms";
import styled from "styled-components";

export default function Home() {
	const StyledSection = styled.section`
		margin: 96px 0 0;
	`;

	const ButtonContainer = styled.div`
		display: flex;
		flex-wrap: wrap;
		max-width: 480px;
		width: 100%;
		padding: 16px;
		outline: 2px solid black;

		> * {
			margin: 0 12px 12px 0;
		}
	`;

	return (
		<StyledSection>
			<h1>Button</h1>
			<ButtonContainer>
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
				<Button shape="pill">Pill Button</Button>
				<Button shape="rounded">Rounded Button</Button>
				<Button shape="square">Square Button</Button>
				<Button btnType="fill" status="success">
					Success
				</Button>
				<Button btnType="fill" status="warning">
					Warning
				</Button>
				<Button btnType="fill" status="error">
					Error
				</Button>
				<Button btnType="fill" status="info">
					Info
				</Button>
				<Button bgColor="green">Background Color</Button>
				<Button btnType="stroke" strokeColor="black">
					Stroke Color
				</Button>
				<Button btnType="text" textColor="blue">
					Text Color
				</Button>
				<Button btnType="text" textColor="blue" underlineColor="red">
					Underline Color
				</Button>
				<Button btnType="text" textColor="blue" noUnderline>
					No underline
				</Button>
			</ButtonContainer>
		</StyledSection>
	);
}

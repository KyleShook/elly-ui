import { Button, RightArrowIcon } from "@components/Atoms";
import styled from "styled-components";
import { ButtonGroup } from "@components/Molecules";

export default function Home() {
	const StyledSection = styled.section`
		margin: 48px 24px 0;
	`;

	const ButtonContainer = styled.div`
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		max-width: 480px;
		width: 100%;
		padding: 16px;
		outline: 2px solid black;

		> * {
			margin: 0 12px 12px 0;
		}
	`;

	return (
		<>
			<StyledSection>
				<h2>Button</h2>
				<ButtonContainer>
					<Button onClick={() => {}}>Click Me</Button>
					<Button onClick={() => {}} btnType="stroke">
						Click Me
					</Button>
					<Button onClick={() => {}} btnType="text">
						Click Me
					</Button>
					<Button onClick={() => {}} btnType="fill" disabled>
						Disabled
					</Button>
					<Button onClick={() => {}} btnType="fill" isLoading size="small">
						Disabled
					</Button>
					<Button onClick={() => {}} rightIcon>
						Next Step
					</Button>
					<Button onClick={() => {}} leftIcon>
						Previous Step
					</Button>
					<Button onClick={() => {}} btnType="icon" size="small">
						<RightArrowIcon />
					</Button>
					<Button onClick={() => {}} size="small">
						Sm Button
					</Button>
					<Button onClick={() => {}} size="medium">
						Md Button
					</Button>
					<Button onClick={() => {}} size="large">
						Lg Button
					</Button>
					<Button onClick={() => {}} shape="pill">
						Pill Button
					</Button>
					<Button onClick={() => {}} shape="rounded">
						Rounded Button
					</Button>
					<Button onClick={() => {}} shape="square">
						Square Button
					</Button>
					<Button onClick={() => {}} btnType="fill" status="success">
						Success
					</Button>
					<Button onClick={() => {}} btnType="fill" status="warning">
						Warning
					</Button>
					<Button onClick={() => {}} btnType="fill" status="error">
						Error
					</Button>
					<Button onClick={() => {}} btnType="fill" status="info">
						Info
					</Button>
					<Button onClick={() => {}} bgColor="green">
						Background Color
					</Button>
					<Button onClick={() => {}} btnType="stroke" strokeColor="black">
						Stroke Color
					</Button>
					<Button onClick={() => {}} btnType="text" textColor="blue">
						Text Color
					</Button>
					<Button onClick={() => {}} btnType="text" textColor="blue" underline>
						Underline
					</Button>
					<Button
						onClick={() => {}}
						btnType="text"
						textColor="blue"
						underlineColor="red"
						underline
					>
						Underline Color
					</Button>
				</ButtonContainer>
			</StyledSection>
			<StyledSection>
				<h2>Button Group</h2>
				<ButtonGroup
					btnTypes={["fill", "text"]}
					sx={{ border: "1px solid gray" }}
					pd={"1rem"}
				>
					<Button onClick={() => {}}>Click Me</Button>
					<Button onClick={() => {}}>Click Me</Button>
				</ButtonGroup>
			</StyledSection>
		</>
	);
}

import React from "react";
import Button from "../../Atoms/Button/Button";
import ButtonGroup from "./ButtonGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Molecules/ButtonGroup",
	component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup sx={{ border: "1px solid #cfcfcf" }} pd="1rem" {...args}>
		<Button onClick={() => {}}>Button #1</Button>
		<Button onClick={() => {}}>Button #2</Button>
	</ButtonGroup>
);

export const StandardGroup = Template.bind({});

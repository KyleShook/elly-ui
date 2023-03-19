import React from "react";
import Button from "../../Atoms/Button/Button";
import ButtonGroup from "./ButtonGroup";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Molecules/ButtonGroup",
	component: ButtonGroup,
	argTypes: {
		size: {
			control: {
				type: "select",
				options: ["small", "medium", "large"],
			},
		},
		shape: {
			control: {
				type: "select",
				options: ["square", "rounded", "pill"],
			},
		},
		btnTypes: {
			control: {
				type: "select",
				options: [
					undefined,
					["fill", "stroke"],
					["stroke", "fill"],
					["fill", "text"],
				],
			},
		},
		gap: {
			control: {
				type: "select",
				options: [".5rem", "1rem", "2rem", "3rem"],
			},
		},
		pd: {
			control: {
				type: "select",
				options: [".5rem", "1rem", "2rem", "3rem"],
			},
		},
	},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup {...args}>
		<Button onClick={() => {}}>Get Started</Button>
		<Button onClick={() => {}}>Learn More</Button>
	</ButtonGroup>
);

export const StandardGroup = Template.bind({});

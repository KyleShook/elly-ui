import React from "react";
import Button from "./Button";
import { ComponentStory } from "@storybook/react";

interface ButtonProps {
	type: "fill" | "stroke" | "text" | "icon";
	size: "small" | "medium" | "large";
	fullWidth?: boolean;
	disabled?: boolean;
	loading?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		type: {
			control: {
				type: "select",
				options: ["fill", "stroke", "text"],
			},
		},
		size: {
			control: {
				type: "select",
				options: ["small", "medium", "large"],
			},
		},
		fullWidth: {
			control: {
				type: "boolean",
			},
		},
	},
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FillButton = Template.bind({});
FillButton.args = {
	btnType: "fill",
	children: "Click Here",
	size: "medium",
};

export const StrokeButton = Template.bind({});
StrokeButton.args = {
	btnType: "stroke",
	children: "Click Here",
	size: "medium",
};

export const TextButton = Template.bind({});
TextButton.args = {
	btnType: "text",
	children: "Click Here",
	size: "medium",
};

export const IconButton = Template.bind({});
IconButton.args = {
	btnType: "icon",
	children: "▶",
	size: "medium",
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
	btnType: "fill",
	children: "Disabled",
	disabled: true,
	size: "medium",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
	btnType: "fill",
	children: null,
	size: "medium",
	loading: true,
};

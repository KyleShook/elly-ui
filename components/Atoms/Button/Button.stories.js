import React from "react";
import Button from "./Button";

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

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const FillButton = Template.bind({});
FillButton.args = {
	type: "fill",
	children: "Click Here",
	size: "medium",
};

export const StrokeButton = Template.bind({});
StrokeButton.args = {
	type: "stroke",
	children: "Click Here",
	size: "medium",
};

export const TextButton = Template.bind({});
TextButton.args = {
	type: "text",
	children: "Click Here",
	size: "medium",
};

export const IconButton = Template.bind({});
IconButton.args = {
	type: "icon",
	children: "▶",
	size: "medium",
};
export const DisabledButton = Template.bind({});
DisabledButton.args = {
	type: "fill",
	children: "Disabled",
	disabled: true,
	size: "medium",
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
	type: "fill",
	children: null,
	size: "medium",
	loading: true,
};

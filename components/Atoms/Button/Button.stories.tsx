import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Atoms/Button",
	component: Button,
	args: {
		btnType: "fill",
		size: "medium",
		leftIcon: false,
		rightIcon: false,
		disabled: false,
		isLoading: false,
		fullWidth: false,
		focusColor: "",
		children: "Click Here",
		onClick: () => {},
	},
	argTypes: {
		fullWidth: {
			control: {
				type: "boolean",
			},
		},
		children: {
			control: {
				type: "text",
			},
		},
		leftIcon: {
			control: {
				type: "boolean",
				defaultValue: false,
			},
		},
		rightIcon: {
			control: {
				type: "boolean",
				defaultValue: false,
			},
		},
		disabled: {
			control: {
				type: "boolean",
			},
		},
		isLoading: {
			control: {
				type: "boolean",
			},
		},
		focusColor: {
			control: {
				type: "color",
			},
		},
		btnType: {
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
		onClick: {
			action: "clicked",
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FillButton = Template.bind({});
FillButton.args = {
	btnType: "fill",
};

export const StrokeButton = Template.bind({});
StrokeButton.args = {
	btnType: "stroke",
};

export const TextButton = Template.bind({});
TextButton.args = {
	btnType: "text",
};

export const IconButton = Template.bind({});
IconButton.args = {
	btnType: "icon",
	children: "▶",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
	children: "Disabled",
	disabled: true,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
	children: undefined,
	isLoading: true,
};

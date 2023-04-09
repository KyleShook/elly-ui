import React from "react";
import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../Icon/Icon";

export default {
	title: "Atoms/Button",
	component: Button,
	args: {
		btnType: "fill",
		shape: "square",
		size: "medium",
		status: undefined,
		bgColor: "",
		strokeColor: "",
		textColor: "",
		underlineColor: "",
		noUnderline: false,
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
		shape: {
			control: {
				type: "select",
				options: ["square", "rounded", "pill"],
			},
		},
		size: {
			control: {
				type: "select",
				options: ["small", "medium", "large"],
			},
		},
		status: {
			control: {
				type: "select",
				options: ["success", "error", "warning", "info", undefined],
			},
		},
		onClick: {
			action: "clicked",
		},
		bgColor: {
			control: {
				type: "color",
			},
		},
		strokeColor: {
			control: {
				type: "color",
			},
		},
		textColor: {
			control: {
				type: "color",
			},
		},
		underlineColor: {
			control: {
				type: "color",
			},
		},
		noUnderline: {
			control: {
				type: "boolean",
			},
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

// export const IconButton = Template.bind({});
// IconButton.args = {
// 	btnType: "icon",
// 	icon: <Icon name={"BxCheck"} color="white" size="lg" alt="Checkmark icon" />,
// 	rightIcon: true,
// 	children: null,
// };

export const IconButton = Template.bind({});
IconButton.args = {
	btnType: "fill",
	rightIcon: (
		<Icon name={"BxBell"} color="white" size="lg" alt="notifcation icon" />
	),
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

export const StatusButton = Template.bind({});
StatusButton.args = {
	children: "Success",
	status: "success",
};

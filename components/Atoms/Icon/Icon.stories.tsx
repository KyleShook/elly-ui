import React from "react";
import Icon from "./Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as icons from "../../../public/icons/index";

export default {
	title: "Atoms/Icon",
	component: Icon,
	args: {},
	argTypes: {
		name: {
			control: {
				type: "select",
				options: Object.keys(icons),
			},
		},
		size: {
			control: {
				type: "select",
				options: ["sm", "md", "lg", "xl", "xxl", "xxxl"],
			},
		},
		color: {
			control: {
				type: "color",
			},
		},
		isLoading: {
			control: {
				type: "boolean",
			},
		},
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconSVG = Template.bind({});
IconSVG.args = {
	name: "BxBell",
	alt: "Bell icon",
	size: "xxxl",
	color: "blue",
	isLoading: false,
};

import React from "react";
import Input from "./Input";

export default {
	title: "Atoms/Input",
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const StandardInput = Template.bind({});
StandardInput.args = {
	placeholder: "john@ellyui.com",
};

export const TextArea = Template.bind({});
TextArea.args = {
	placeholder: "Enter text here",
	textarea: "textarea",
	multiline: true,
	width: "300px",
	height: "250px",
};

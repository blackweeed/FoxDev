import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
	title: "Form",
	component: Form,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {},
};

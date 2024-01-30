import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
	title: "Logo",
	component: Logo,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {
		className: "default-class",
	},
};

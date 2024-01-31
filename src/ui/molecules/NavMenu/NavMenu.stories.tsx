import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";

const meta: Meta<typeof NavMenu> = {
	title: "NavMenu",
	component: NavMenu,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import { MainHeading } from "./MainHeading";

const meta: Meta<typeof MainHeading> = {
	title: "MainHeading",
	component: MainHeading,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {
		heading: "Lorem ipsum",
	},
};

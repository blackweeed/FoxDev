import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavButton } from "./MobileNavButton";

const meta: Meta<typeof MobileNavButton> = {
	title: "MobileNavButton",
	component: MobileNavButton,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {},
};

import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeText } from "./WelcomeText";

const meta: Meta<typeof WelcomeText> = {
	title: "WelcomeText",
	component: WelcomeText,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {
		welcome: "Cześć",
	},
};

import type { Meta, StoryObj } from "@storybook/react";
import { HeadingSection } from "./HeadingSection";

const meta: Meta<typeof HeadingSection> = {
	title: "HeadingSection",
	component: HeadingSection,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {
		heading: "Lorem",
		headingSpan: "Ipsum",
	},
};

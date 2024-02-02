import type { Meta, StoryObj } from "@storybook/react";

import { SectionHero } from "./SectionHero";

const meta: Meta<typeof SectionHero> = {
	component: SectionHero,
};

export default meta;
type Story = StoryObj<typeof SectionHero>;

export const Primary: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
	decorators: [(Story) => <Story />],
	args: {
		welcome: "Welcome",
		heading: "Lorem Ipsum",
		subheading: "Frontend",
	},
};

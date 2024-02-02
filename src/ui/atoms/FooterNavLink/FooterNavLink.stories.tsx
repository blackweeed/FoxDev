import type { Meta, StoryObj } from "@storybook/react";

import { FooterNavLink } from "./FooterNavLink";

const meta: Meta<typeof FooterNavLink> = {
	component: FooterNavLink,
};

export default meta;
type Story = StoryObj<typeof FooterNavLink>;

export const Primary: Story = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
	decorators: [
		(Story) => (
			<div style={{ margin: "3em" }}>
				<Story />
			</div>
		),
	],
	args: {
		items: ["elo", "elo1"],
		title: "Heboj",
	},
};

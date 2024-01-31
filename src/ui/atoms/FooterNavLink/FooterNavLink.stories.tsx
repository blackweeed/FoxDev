import type { Meta, StoryObj } from "@storybook/react";
import { FooterNavLink } from "./FooterNavLink";

const meta: Meta<typeof FooterNavLink> = {
	title: "FooterNavLink",
	component: FooterNavLink,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {
		className: "default-class",
	},
};

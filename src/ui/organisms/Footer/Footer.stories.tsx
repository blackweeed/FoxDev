import type { Meta, StoryObj } from "@storybook/react";
import { FooterWithSocialLinks as Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
	title: "Footer",
	component: Footer,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {},
};

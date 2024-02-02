import type { Meta, StoryObj } from "@storybook/react";
import { SectionContact } from "./SectionContact";

const meta: Meta<typeof SectionContact> = {
	title: "SectionContact",
	component: SectionContact,
};

export default meta;

export const Base: StoryObj<typeof meta> = {
	args: {},
};

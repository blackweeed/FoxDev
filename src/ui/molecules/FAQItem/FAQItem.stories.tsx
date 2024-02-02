import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FAQItem } from "./FAQItem";

const meta: Meta<typeof FAQItem> = {
	title: "FAQItem",
	component: FAQItem,
};

export default meta;

const Template: StoryObj<typeof FAQItem> = (args) => {
	// Użycie useState do zarządzania stanem w Storybook
	const [toggle, setToggle] = useState(false);

	// Funkcja zmieniająca stan
	const handleToggle = () => setToggle(!toggle);

	return (
		<FAQItem
			{...args}
			toggleAnswer={toggle ? 1 : 0} // Przykład użycia stanu do zmiany propsów
			setToggleAnswer={handleToggle} // Przekazanie funkcji zmieniającej stan
		/>
	);
};

// Definiowanie story z użyciem Template
export const Default = Template.bind({});
Default.args = {
	index: 1,
	question: "Jakie są godziny otwarcia?",
	answer: "Nasze godziny otwarcia to 8:00 - 16:00.",
};


"use client";

import { useState } from "react";
import { SectionHeading } from "../atoms/SectionHeading";
import { FAQItem } from "../molecules/FAQItem";

type FAQItemType = {
	question: string;
	answer: string;
};

type SectionFAQProps = {
	faqArray: FAQItemType[];
	heading: string;
	headingSpan: string;
};

export const SectionFAQ = ({ faqArray, heading, headingSpan }: SectionFAQProps) => {
	const [toggleAnswer, setToggleAnswer] = useState(0);

	return (
		<section className="mt-16 w-full px-6 lg:px-40">
			<SectionHeading
				className="[&>*:last-child]:underline [&>*:last-child]:decoration-colorPrimary"
				heading={heading}
				headingSpan={headingSpan}
			/>
			<div className="mx-auto flex w-full flex-col gap-6 lg:w-[80%]">
				{faqArray.map((aq, index) => {
					return (
						<FAQItem
							key={aq.answer}
							toggleAnswer={toggleAnswer}
							setToggleAnswer={setToggleAnswer}
							answer={aq.answer}
							question={aq.question}
							index={index}
						/>
					);
				})}
			</div>
		</section>
	);
};

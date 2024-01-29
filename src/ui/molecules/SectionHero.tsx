import React from "react";
import { WelcomeText } from "../atoms/WelcomeText";
import { MainHeading } from "../atoms/MainHeading";
import { Subheading } from "../atoms/SubHeading";

type HeroSectionProps = {
	welcome: string;
	heading: string;
	subheading: string;
};

export const SectionHero = ({ welcome, heading, subheading }: HeroSectionProps) => {
	return (
		<section className="relative flex h-[50vh] w-full flex-col items-center justify-start text-center lg:h-[70vh] lg:items-start lg:px-40 lg:text-left ">
			<WelcomeText welcome={welcome} />
			<MainHeading heading={heading} />
			<Subheading subheading={subheading} />
		</section>
	);
};

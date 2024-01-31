import React from "react";
import { WelcomeText } from "../atoms/WelcomeText/WelcomeText";
import { MainHeading } from "../atoms/MainHeading/MainHeading";
import { Subheading } from "../atoms/SubHeading";

type HeroSectionProps = {
	welcome: string;
	heading: string;
	subheading: string;
};

export const SectionHero = ({ welcome, heading, subheading }: HeroSectionProps) => {
	return (
		<section className="test1 relative mb-6 flex h-[80svh] w-full flex-col items-center justify-start px-6 pt-40 text-center lg:h-[100vh] lg:items-start lg:px-40 lg:text-left">
			<div className="bg-hero-overlay-mobile absolute inset-0 left-0 right-0 top-0 z-30 bg-colorBackground bg-[url('/images/fox-overlay.png')] bg-[bottom] bg-no-repeat opacity-60 lg:bg-hero-overlay lg:bg-fixed lg:bg-[right_-6rem_bottom_-13rem]  ">
				<div className="rom-cyan-500 from-1% absolute inset-0 left-0 right-0 top-0 z-[60]  bg-gradient-to-t from-colorBackground to-transparent to-30%  bg-no-repeat opacity-100 "></div>
			</div>
			<div className="z-40">
				<WelcomeText welcome={welcome} />
				<MainHeading heading={heading} />
				<Subheading subheading={subheading} />
			</div>
		</section>
	);
};

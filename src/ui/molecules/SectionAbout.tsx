import React from "react";
import { Pargraph } from "../atoms/Pargraph";
import { ResponsiveImage } from "../atoms/ResponsiveImage";

export const SectionAbout = ({ about }: { about: string }) => {
	return (
		<section className="flex w-full flex-col items-center gap-8 px-6 lg:flex-row lg:pl-40">
			<div className="lg:basis-[45%]">
				<Pargraph about={about} />
			</div>
			<div className="pointer-events-none relative h-[20rem] w-full lg:h-[44rem] lg:basis-[55%]">
				<ResponsiveImage src={"/lis.png"} alt="fox image" />
			</div>
		</section>
	);
};

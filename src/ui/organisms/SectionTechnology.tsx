import { HeadingSection } from "../atoms/HeadingSection/HeadingSection";
import { Techstack } from "../molecules/Techstack";

export const SectionTechnology = ({
	heading,
	headingSpan,
}: {
	heading: string;
	headingSpan: string;
}) => {
	return (
		<section className="mt-6 w-full">
			<HeadingSection
				heading={heading}
				headingSpan={headingSpan}
				className="mb-10 px-6 lg:pl-40 [&>*:first-child]:bg-colorPrimary [&>*:first-child]:px-1 [&>*:first-child]:py-0.5"
			/>
			<Techstack />
		</section>
	);
};

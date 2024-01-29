import { SectionHeading } from "../atoms/SectionHeading";
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
			<SectionHeading
				heading={heading}
				headingSpan={headingSpan}
				className="[&>*:first-child]:bg-colorPrimary [&>*:first-child]:px-1 [&>*:first-child]:py-0.5"
			/>
			<Techstack />
		</section>
	);
};

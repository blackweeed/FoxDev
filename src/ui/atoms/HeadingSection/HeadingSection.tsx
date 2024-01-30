export const HeadingSection = ({
	heading,
	headingSpan,
	className,
}: {
	heading: string;
	headingSpan: string;
	className: string;
}) => {
	return (
		<div
			className={`mb-12 inline-flex gap-1 px-6 text-2xl font-semibold lg:px-40 lg:text-5xl ${className}`}
		>
			<div>{heading}</div> <div>{headingSpan}</div>
		</div>
	);
};

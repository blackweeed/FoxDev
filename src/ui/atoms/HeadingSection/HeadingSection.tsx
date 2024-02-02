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
		<div className={`inline-flex gap-2 text-xl font-semibold lg:text-5xl ${className}`}>
			<div>{heading}</div>
			<div>{headingSpan}</div>
		</div>
	);
};

type FAQItemProps = {
	toggleAnswer: number;
	setToggleAnswer: (arg: number) => void;
	answer: string;
	question: string;
	index: number;
};

export const FAQItem = ({
	toggleAnswer,
	setToggleAnswer,
	answer,
	question,
	index,
}: FAQItemProps) => {
	const handleClick = (index: number) => {
		if (toggleAnswer === index) {
			setToggleAnswer(null);
		} else {
			setToggleAnswer(index);
		}
	};

	return (
		<div
			key={question}
			onClick={() => handleClick(index)}
			className="group flex h-fit w-full cursor-pointer flex-col justify-between  rounded px-10 py-4 shadow-sm shadow-colorPrimary"
		>
			<div className="flex items-center justify-between">
				<h3 className="max-w-[80%] text-base font-medium text-colorText lg:max-w-[90%] lg:text-lg ">
					{question}
				</h3>
				<button className="flex h-10 w-10 items-center justify-center rounded-full border-[1.6px] border-colorPrimary shadow-md transition-colors duration-300 group-hover:bg-colorPrimary group-hover:shadow-xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2.1"
						stroke="currentColor"
						className={`h-6 w-6 transition-transform duration-500 ${toggleAnswer === index && "rotate-180"}`}
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
					</svg>
				</button>
			</div>
			<p
				className={`mt-2 max-w-[90%] text-colorTextLighter transition-all duration-500 ${toggleAnswer === index ? "block" : "hidden"}`}
			>
				{answer}
			</p>
		</div>
	);
};

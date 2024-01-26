"use client";

import Image from "next/image";
import { useState } from "react";

export const Techstack = () => {
	const [itemIndex, setItemIndex] = useState(0);

	const technologies = [
		{
			background: "bg-blue-700",
			border: "border-blue-700",
			url: "/techstack-logos/react.png",
		},
		{
			background: "bg-blue-100",
			border: "border-blue-100",
			url: "/techstack-logos/nextjs.png",
		},
		{
			background: "bg-blue-600",
			border: "border-blue-600",
			url: "/techstack-logos/typescript.svg",
		},
		{
			background: "bg-blue-800",
			border: "border-blue-800",
			url: "/techstack-logos/wordpress.png",
		},
		{
			background: "bg-purple-700",
			border: "border-purple-700",
			url: "/techstack-logos/woocomerce.png",
		},
		{
			background: "bg-blue-200",
			border: "border-blue-200",
			url: "/techstack-logos/strapi.png",
		},
		{
			background: "bg-blue-900",
			border: "border-blue-900",
			url: "/techstack-logos/docker.svg",
		},
		{
			background: "bg-purple-400",
			border: "border-purple-400",
			url: "/techstack-logos/github.png",
		},
	];

	return (
		<div
			className={`bg-bgColorDark h-[260px] w-full rounded-t-[3.125rem] p-10 ${technologies[itemIndex].border} relative overflow-hidden `}
		>
			<div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-8">
				{technologies.map((tech, index) => {
					return (
						<div key={tech.url}>
							<div
								onMouseEnter={() => setItemIndex(index)}
								className={`relative z-20 h-full w-full cursor-pointer grayscale ${index === itemIndex && "grayscale-0"}`}
							>
								<Image src={tech.url} fill alt="" className="object-contain" />
							</div>
							{/* <div className="absolute inset-x-0 -top-10 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
								<div
									style={{
										clipPath:
											"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
									}}
									className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] ${technologies[itemIndex].background} opacity-70 blur-3xl sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
								></div>
							</div> */}
						</div>
					);
				})}
			</div>
		</div>
	);
};

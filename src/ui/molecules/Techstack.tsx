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
			className={`h-[260px] w-full bg-colorBackgroundDark p-10  ${technologies[itemIndex].border} relative overflow-hidden `}
		>
			<div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-8">
				{technologies.map((tech, index) => {
					return (
						<div key={tech.url}>
							<div
								onMouseEnter={() => setItemIndex(index)}
								className={`relative z-20 h-full w-full cursor-pointer brightness-0 invert ${index === itemIndex && ""}`}
							>
								<Image src={tech.url} fill alt="" className="object-contain" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

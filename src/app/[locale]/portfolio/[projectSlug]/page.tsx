import { LinkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { Typography } from "@/ui/atoms/Typography/Typography";

export default function SingleProjectPage({ params }: { params: { projectSlug: string } }) {
	const technologies = [
		{
			title: "React",
			logoSrc: "/techstack-logos/react.png",
		},
		{
			title: "Node js",
			logoSrc: "/techstack-logos/nodejs.png",
		},
	];

	const fontsForDisplay = [
		{
			name: "Protest Riot",
			importUrl: ["Protest Riot:400", "sans-serif"],
		},
		{
			name: "Protest Guerrilla",
			importUrl: ["Protest Guerrilla", "sans-serif"],
		},
	];

	return (
		<section className="mt-60 ">
			<div className="mb-16 flex gap-10 px-40">
				<div className="relative h-[400px] w-[400px] flex-1">
					<Image
						src="/projects/razer-store/razer-mockoup.png"
						className="object-contain"
						fill
						alt=""
					/>
				</div>
				<div className="flex-1">
					<h1 className="text-3xl font-semibold ">Sklep internetowy RAZER</h1>
					<button className="inline-flex gap-2">
						<LinkIcon className="h-6 w-6" /> Zobacz online
					</button>
					<p>
						Razer Store to wszechstronna aplikacja e-commerce z wizualnie atrakcyjnym i przyjaznym
						dla użytkownika interfejsem. Podczas budowania tej aplikacji, zgłębiłem wiedzę na temat
						React, doskonaląc swoje umiejętności i skutecznie rozwiązując liczne wyzwania.
						Zastosowałem technikę projektowania z myślą o urządzeniach mobilnych, a następnie
						dostosowałem style do większych urządzeń. Aplikacja oferuje szeroki zakres
						funkcjonalności, w tym zaawansowane wyszukiwanie zasilane przez Express.js, funkcję
						newslettera, kody promocyjne i bezproblemowy system zarządzania koszykiem. Całkowite
						doświadczenie jest intuicyjne i estetycznie przyjemne.
					</p>
				</div>
			</div>
			<div className="color-pallete-and-topography flex justify-between gap-10  px-40">
				<div className="flex h-60 w-full flex-1 flex-col ">
					<h2 className="pb-4 text-lg font-semibold">Colors used in:</h2>
					<div className="flex h-60 w-full flex-1 overflow-hidden rounded-md border border-colorText/30 shadow-md">
						<div className=" h-full w-full">
							<div className="h-[70%] bg-[#44d62c]"></div>
							<div className="flex h-[30%] items-center justify-center text-colorText">FABC3A</div>
						</div>
						<div className=" h-full w-full">
							<div className="h-[70%] bg-black "></div>
							<div className="flex h-[30%] items-center justify-center  text-colorText">FABC3A</div>
						</div>
						<div className=" h-full w-full">
							<div className="h-[70%] bg-white/80"></div>
							<div className="flex h-[30%] items-center  justify-center text-colorText">FABC3A</div>
						</div>
					</div>
				</div>
				<Typography fonts={fontsForDisplay} />
			</div>
			<div className="my-10 flex h-[380px] justify-between bg-black text-white">
				<div className="flex flex-1 flex-col justify-center pl-40">
					<h3 className="mb-3 text-4xl font-semibold">The technology</h3>
					<p className="text-lg">We provide optimal tech stack for each project</p>
				</div>
				<div className="flex flex-1 items-center">
					{technologies.map((tech) => {
						return (
							<React.Fragment key={tech.title}>
								<div className="relative h-36 w-36 brightness-0 invert">
									<Image src={tech.logoSrc} alt={tech.title} fill className="object-contain" />
								</div>
								<div className="mx-14 h-[65%] w-0.5 rounded-3xl bg-gradient-to-b from-purple-500/70 via-white/80 to-cyan-500/60 last:hidden"></div>
							</React.Fragment>
						);
					})}
				</div>
			</div>
			<div className="relative my-40 h-[440px] w-full">
				<Image src="/projects/razer-store/razer-grid.png" alt="" fill className="object-cover" />
			</div>
			<div></div>
		</section>
	);
}

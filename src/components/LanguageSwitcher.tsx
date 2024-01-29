"use client";
import Image from "next/image";
import { useState } from "react";
import { Link } from "@/navigation";

export const LanguageSwitcher = ({ locale }: { locale: string }) => {
	const [toogle, setToggle] = useState(false);

	const languages = [
		{ shourtcut: "pl", title: "poland", icon: "/country-icons/poland.svg" },
		{ shourtcut: "en", title: "united state", icon: "/country-icons/united-states.svg" },
		{ shourtcut: "de", title: "deutschland", icon: "/country-icons/germany.svg" },
	];

	const currenLanguage = languages.find((languge) => languge.shourtcut === locale);

	return (
		<button
			onClick={() => setToggle((prev) => !prev)}
			type="button"
			className="relative inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary bg-white/80 py-1 text-sm font-medium uppercase shadow-lg shadow-primary"
		>
			<Image
				className="overflow-hidden rounded-full"
				src={currenLanguage?.icon ?? ""}
				width={26}
				height={26}
				alt="poland"
			/>
			{locale}
			<svg
				className="-me-1 ms-2 h-5 w-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
					clipRule="evenodd"
				/>
			</svg>
			{toogle && (
				<div className="absolute -top-2 h-fit w-[140%] rounded-md border-2 border-primary bg-white shadow-xl shadow-primary">
					{languages.map((language) => (
						<Link
							href="/"
							locale={language.shourtcut}
							key={language.title}
							className="flex items-center justify-between p-2"
						>
							<p>{language.title}</p>
							<Image
								className="overflow-hidden rounded-full"
								src={language.icon ?? ""}
								width={26}
								height={26}
								alt="poland"
							/>
						</Link>
					))}
				</div>
			)}
		</button>
	);
};

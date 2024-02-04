"use client";

import { useEffect, useState } from "react";

type TypographyProps = {
	name: string;
	importUrl: string[];
};

export const Typography = ({ fonts }: { fonts: TypographyProps[] }) => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			const WebFont = await import("webfontloader");
			WebFont.load({
				google: {
					families: fonts.map((font) => font.name),
				},
				active: () => {
					setFontsLoaded(true);
				},
			});
		};

		loadFonts().catch((error) => console.error("Nie udało się załadować czcionek", error));
	}, [fonts]);

	return (
		<div className=" flex-1 gap-10">
			<h2 className="pb-4 text-lg font-semibold">Typography:</h2>
			{fontsLoaded && (
				<div className="flex gap-10">
					{fonts.map((font, index) => (
						<div
							className="flex flex-col text-center"
							key={index}
							style={{ fontFamily: font.name }}
						>
							<h3 className="text-9xl">Aa</h3>
							<h2 className="text-3xl font-semibold tracking-wider">{font.name}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

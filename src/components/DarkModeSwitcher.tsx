"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const DarkModeSwitcher = () => {
	const [mounted, setIsMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setIsMounted(true), []);

	if (!mounted) {
		<div className="mr-8 flex w-20 items-center rounded-full border-2 border-primary shadow-md"></div>;
	}

	return (
		<button
			onClick={resolvedTheme === "dark" ? () => setTheme("light") : () => setTheme("dark")}
			className={`${resolvedTheme === "dark" ? "justify-end bg-black" : "justify-start bg-white/60"} mr-8 flex w-20 items-center rounded-full  shadow-md shadow-primary `}
		>
			{resolvedTheme === "dark" ? (
				<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg shadow-black">
					<SunIcon className="h-6 w-6 text-black" />
				</div>
			) : (
				<div className="flex h-9 w-9 items-center justify-center rounded-full bg-black shadow-lg shadow-black">
					<MoonIcon className="h-6 w-6 text-white" />
				</div>
			)}
		</button>
	);
};

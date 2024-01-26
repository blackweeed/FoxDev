"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export const DarkModeSwitcher = () => {
	const [toggleMode, setToggleMode] = useState(false);

	return (
		<button className="mr-4" onClick={() => setToggleMode((prev) => !prev)}>
			{toggleMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
		</button>
	);
};

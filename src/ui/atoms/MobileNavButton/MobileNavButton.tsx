"use client";

import { Bars2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { MobileMenu } from "@/components/MobileMenu";

export const MobileNavButton = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<button onClick={() => setToggle(true)} className="ml-auto mr-2 lg:hidden">
				<Bars2Icon className="h-6 w-6" />
			</button>
			{toggle && <MobileMenu />}
		</>
	);
};

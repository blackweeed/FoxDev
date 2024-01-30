import React from "react";

export const Pargraph = ({ about }: { about: string }) => {
	return (
		<p className="text-xl font-medium tracking-wide text-colorBackgroundDark lg:text-4xl">
			{about}
		</p>
	);
};

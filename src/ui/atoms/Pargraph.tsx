import React from "react";

export const Pargraph = ({ about }: { about: string }) => {
	return (
		<p className="text-colorTextLighter text-xl font-medium tracking-wide lg:text-4xl">{about}</p>
	);
};

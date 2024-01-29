import React from "react";

export const MainHeading = ({ heading }: { heading: string }) => {
	return <h1 className="max-w-5xl text-xl font-semibold text-colorText lg:text-7xl">{heading}</h1>;
};

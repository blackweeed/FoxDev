import React from "react";

export const WelcomeText = ({ welcome }: { welcome: string }) => {
	return <p className="mb-4 w-fit bg-colorPrimary px-2 py-1 text-2xl text-colorText">{welcome}</p>;
};

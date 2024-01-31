import React from "react";

export const WelcomeText = ({ welcome }: { welcome: string }) => {
	return (
		<p className="mx-auto mb-4 w-fit bg-colorPrimary px-2 py-1 text-2xl text-colorText lg:mx-0">
			{welcome}
		</p>
	);
};

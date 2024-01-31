import React from "react";

export const Subheading = ({ subheading }: { subheading: string }) => {
	return (
		<h2 className="tracking wide mt-10 inline-flex text-2xl font-medium text-colorText underline decoration-colorPrimary decoration-solid decoration-[3.6px] lg:mt-20 lg:text-3xl lg:text-[2.4125rem]">
			{subheading}
		</h2>
	);
};

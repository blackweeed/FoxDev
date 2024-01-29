import React from "react";

export const Subheading = ({ subheading }: { subheading: string }) => {
	return (
		<h2 className="tracking wide mt-20 inline-flex text-[2.4125rem] font-medium text-colorText underline decoration-colorPrimary decoration-solid decoration-[3.6px]">
			{subheading}
		</h2>
	);
};

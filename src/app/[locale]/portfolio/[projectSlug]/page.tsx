import React from "react";

export default function SingleProjectPage({ params }: { params: { projectSlug: string } }) {
	return (
		<div className="flex h-[500px] w-full items-center justify-center text-center text-2xl font-medium">
			{params.projectSlug}
		</div>
	);
}

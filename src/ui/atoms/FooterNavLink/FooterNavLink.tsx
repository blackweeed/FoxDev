"use client";

import { Typography } from "@material-tailwind/react";
import { Link } from "@/navigation";

type FooterNavLinkProps = {
	title: string;
	items: string[];
};

export const FooterNavLink = ({ title, items }: FooterNavLinkProps) => {
	return (
		<ul>
			<Typography variant="h4" className="mb-3 font-medium text-colorPrimary">
				{title}
			</Typography>
			{items.map((link) => (
				<Link href={"/"} key={link}>
					<Typography className="py-1.5 font-normal text-colorTextLight transition-colors hover:text-colorBackground/70">
						{link}
					</Typography>
				</Link>
			))}
		</ul>
	);
};

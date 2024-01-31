import { FooterNavLink } from "@/ui/atoms/FooterNavLink/FooterNavLink";

const LINKS = [
	{
		title: "Kontakt",
		items: ["konr.jankowski@gmail.com", "+48 788 710 291"],
	},
	{
		title: "Menu",
		items: ["O mnie", "Portfolio", "Usługi"],
	},
	{
		title: "Blog",
		items: ["Najnowsze", "Artykuły", "Front end", "Back end"],
	},
];

export const Footernav = () => {
	return (
		<div className="mt-6 grid grid-cols-2 justify-between gap-x-20 gap-y-4 lg:mt-0 lg:grid-cols-3 lg:gap-20	">
			{LINKS.map(({ title, items }) => (
				<FooterNavLink key={title} title={title} items={items} />
			))}
		</div>
	);
};

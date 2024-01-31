import { NavItem } from "@/ui/atoms/NavItem/NavItem";
type HeroIcon = React.ComponentType<
	React.PropsWithoutRef<React.ComponentProps<"svg">> & {
		title?: string | undefined;
		titleId?: string | undefined;
	}
>;

type NavListItemsProps = {
	label: string;
	url: string;
	Icon: HeroIcon;
};

export const NavMenu = ({
	navListItems,
	className,
}: {
	navListItems: NavListItemsProps[];
	className?: string;
}) => {
	return (
		<div className={`hidden gap-4 lg:flex lg:flex-row ${className}`}>
			<ul className="mb-4 mt-2 flex flex-col gap-10 text-xl capitalize text-colorText lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
				{navListItems.map(({ label, Icon, url }, index) => (
					<NavItem key={label} Icon={Icon} url={url} index={index} label={label} />
				))}
			</ul>
		</div>
	);
};

import { Link } from "@/navigation";
type HeroIcon = React.ComponentType<
	React.PropsWithoutRef<React.ComponentProps<"svg">> & {
		title?: string | undefined;
		titleId?: string | undefined;
	}
>;
type NavItemProps = {
	label: string;
	Icon: HeroIcon;
	url: string;
	index: number;
};
export const NavItem = ({ label, Icon, url, index }: NavItemProps) => {
	return (
		<div className="flex items-center" key={index}>
			<Link href={url}>
				<div className="flex items-center gap-2 underline decoration-colorPrimary decoration-2 lg:rounded-full">
					<Icon className="h-6 w-6" />
					<span> {label}</span>
				</div>
			</Link>
		</div>
	);
};

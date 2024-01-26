import {
	BuildingLibraryIcon,
	PaintBrushIcon,
	Bars2Icon,
	PencilSquareIcon,
	DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";
import { Link } from "../navigation";
import { Logo } from "./Logo";
import { DarkModeSwitcher } from "./DarkModeSwitcher";

export function Navbar() {
	const t = useTranslations("Navbar");

	const navListItems = [
		{
			label: t("about-me"),
			url: "/about",
			Icon: BuildingLibraryIcon,
		},
		{
			label: t("portfolio"),
			url: "/portfolio",
			Icon: PaintBrushIcon,
		},
		{
			label: t("blog"),
			url: "/blog",
			Icon: PencilSquareIcon,
		},
		{
			label: t("contact"),
			url: "/contact",
			Icon: DevicePhoneMobileIcon,
		},
	];

	return (
		<nav className="fixed z-50 w-full rounded-none  bg-white/70 py-6 text-2xl shadow-md backdrop-blur-md lg:px-20">
			<div className="relative mx-auto flex items-center justify-between text-black">
				<Logo className="text-3xl font-semibold text-black" />
				<div className="hidden gap-4 lg:flex">
					<ul className="mb-4 mt-2 flex flex-col gap-10 text-xl capitalize text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
						{navListItems.map(({ label, Icon, url }, index) => (
							<div className="flex items-center" key={index}>
								<Link href={url}>
									<div className="flex items-center gap-2 underline decoration-primary decoration-2 lg:rounded-full">
										<Icon className="h-6 w-6" />
										<span> {label}</span>
									</div>
								</Link>
							</div>
						))}
					</ul>
				</div>
				<button className="ml-auto mr-2 lg:hidden">
					<Bars2Icon className="h-6 w-6" />
				</button>
				<div className="flex items-center gap-1">
					<DarkModeSwitcher />
					<Link href="/" locale="pl" className="hover:text-primary">
						PL
					</Link>
					<p>/</p>
					<Link href="/" locale="de" className="hover:text-primary">
						DE
					</Link>
					<p>/</p>
					<Link href="/" locale="en" className="hover:text-primary">
						EN
					</Link>
				</div>
			</div>
		</nav>
	);
}

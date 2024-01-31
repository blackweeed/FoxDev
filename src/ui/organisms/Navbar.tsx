import {
	BuildingLibraryIcon,
	PaintBrushIcon,
	PencilSquareIcon,
	DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { NextIntlClientProvider, useMessages, useTranslations } from "next-intl";
import pick from "lodash/pick";
import { Logo } from "../atoms/Logo/Logo";
import { DarkModeSwitcher } from "../atoms/DarkModeSwitcher";
import { LanguageSwitcher } from "../atoms/LanguageSwitcher";
import { NavMenu } from "../molecules/NavMenu/NavMenu";
import { MobileMenu } from "@/components/MobileMenu";

export function Navbar({ locale }: { locale: string }) {
	const t = useTranslations("Navbar");
	const messages = useMessages();

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
		<nav className="fixed z-50 w-full bg-colorBackground/80 px-4 py-6 text-2xl shadow-md shadow-colorText/30 backdrop-blur-md lg:px-20">
			<div className="text-text relative mx-auto flex items-center justify-between">
				<Logo className="text-primary text-3xl font-semibold" />
				<NavMenu navListItems={navListItems} />
				<div className="hidden items-center gap-1 lg:flex ">
					<DarkModeSwitcher />
					<LanguageSwitcher locale={locale} />
				</div>
				<NextIntlClientProvider messages={pick(messages, "Navbar")}>
					<MobileMenu locale={locale} />
				</NextIntlClientProvider>
			</div>
		</nav>
	);
}

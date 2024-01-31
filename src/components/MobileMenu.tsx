"use client";

import {
	BuildingLibraryIcon,
	DevicePhoneMobileIcon,
	PaintBrushIcon,
	PencilSquareIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { DarkModeSwitcher } from "../ui/atoms/DarkModeSwitcher";
import { LanguageSwitcher } from "../ui/atoms/LanguageSwitcher";
import { NavMenu } from "@/ui/molecules/NavMenu/NavMenu";
import { ButtonHamburger } from "@/ui/atoms/ButtonHamburger/ButtonHamburger";

export const MobileMenu = ({ locale }: { locale: string }) => {
	const t = useTranslations("Navbar");
	const [toggle, setToggle] = useState(false);

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
		<>
			<div
				className={`${toggle ? "fixed" : "hidden"} inset-0 left-0 right-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-colorBackground text-3xl capitalize`}
			>
				<NavMenu className={`${toggle && "!flex !flex-col"}`} navListItems={navListItems} />
				<div className=" mt-10 flex items-center gap-1">
					<DarkModeSwitcher />
					<LanguageSwitcher locale={locale} />
				</div>
			</div>
			<ButtonHamburger toggle={toggle} setToggle={setToggle} />
		</>
	);
};

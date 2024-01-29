import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "@/navigation";

export const MobileMenu = ({ navListItems, locale }) => {
	return (
		<div className="absolute inset-0 flex h-screen flex-col items-center justify-center gap-10 bg-white text-3xl capitalize">
			<div>
				<XMarkIcon className="absolute right-8 top-8 h-8 w-8" />
			</div>
			{navListItems.map(({ label, Icon, url }, index) => (
				<div className="flex items-center " key={index}>
					<Link href={url}>
						<div className="text-text flex items-center gap-2 underline decoration-primary decoration-2 lg:rounded-full">
							<Icon className="h-6 w-6" />
							<span> {label}</span>
						</div>
					</Link>
				</div>
			))}
			<div className=" mt-10 flex items-center gap-1">
				<DarkModeSwitcher />
				<LanguageSwitcher locale={locale} />
			</div>
		</div>
	);
};

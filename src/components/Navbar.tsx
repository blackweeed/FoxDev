"use client";

import React from "react";
// import Link from "next/link";

import {
	Navbar,
	MobileNav,
	Typography,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Card,
	IconButton,
} from "@material-tailwind/react";
import {
	BuildingLibraryIcon,
	PaintBrushIcon,
	GlobeEuropeAfricaIcon,
	ChevronDownIcon,
	Bars2Icon,
	PencilSquareIcon,
	DevicePhoneMobileIcon,
	BriefcaseIcon,
} from "@heroicons/react/24/solid";
import { Link } from "../navigation";
import { Logo } from "./Logo";
import { DarkModeSwitcher } from "./DarkModeSwitcher";

const navListMenuItems = [
	{
		title: "Web development",
		description: "Tworzymy strony www, aplikacje webowe oraz sklepy e-commerce dla twojego biznesu",
	},
	{
		title: "Integracje z system CMS",
		description:
			"Zadbaj o łatwość w obsłudze strony internetowej dzięki dedykowanemu systemowi do zarządzania treścią",
	},
	{
		title: "Design",
		description:
			"Dbamy o najnowsze trendy UI/UX design dzięki współpracy z doświadczonymi designerami",
	},
];

function NavListMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			<MenuItem>
				<Typography variant="h6" color="blue-gray" className="mb-1">
					{title}
				</Typography>
				<Typography variant="small" color="gray" className="font-normal">
					{description}
				</Typography>
			</MenuItem>
		</a>
	));

	return (
		<React.Fragment>
			<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
				<MenuHandler>
					<Typography as="a" href="#" variant="small" className="font-normal">
						<MenuItem className="text-navy hidden items-center gap-2 text-lg font-medium lg:flex lg:rounded-full">
							<BriefcaseIcon className="h-[18px] w-[18px] " /> Usługi{" "}
							<ChevronDownIcon
								strokeWidth={2}
								className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
							/>
						</MenuItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
					<Card
						shadow={false}
						variant="gradient"
						className="bg-mint col-span-3 grid h-full w-full place-items-center rounded-md"
					>
						<GlobeEuropeAfricaIcon strokeWidth={1} className="fill-navy h-28 w-28" />
					</Card>
					<ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
				</MenuList>
			</Menu>
			<MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
				<GlobeEuropeAfricaIcon className="h-[18px] w-[18px] text-blue-gray-500" /> Pages{" "}
			</MenuItem>
			<ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
		</React.Fragment>
	);
}

const navListItems = [
	{
		label: "O mnie",
		url: "/about",
		icon: BuildingLibraryIcon,
	},
	{
		label: "Portfolio",
		url: "/portfolio",
		icon: PaintBrushIcon,
	},
	{
		label: "Blog",
		url: "/blog",
		icon: PencilSquareIcon,
	},
	{
		label: "Kontakt",
		url: "/contact",
		icon: DevicePhoneMobileIcon,
	},
];

function NavList() {
	return (
		<ul className="mb-4 mt-2 flex flex-col gap-2 text-xl text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
			{navListItems.map(({ label, icon, url }, index) => (
				<div className="flex items-center" key={index}>
					{index === 2 && <NavListMenu />}
					<Link href={url}>
						<MenuItem className="flex items-center gap-2 lg:rounded-full">
							{React.createElement(icon, { className: "h-[18px] w-[18px]" })} <span> {label}</span>
						</MenuItem>
					</Link>
				</div>
			))}
		</ul>
	);
}

export function ComplexNavbar() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
	}, []);

	return (
		<Navbar className="fixed z-50 max-w-full  rounded-none py-6 text-2xl backdrop-blur-md lg:px-20">
			<div className="relative mx-auto flex items-center justify-between text-black">
				<Logo className="text-3xl font-semibold text-black" />
				<div className="hidden gap-4 lg:flex">
					<NavList />
				</div>
				<IconButton
					size="sm"
					color="blue-gray"
					variant="text"
					onClick={toggleIsNavOpen}
					className="ml-auto mr-2 lg:hidden"
				>
					<Bars2Icon className="h-6 w-6" />
				</IconButton>
				<div className="flex items-center gap-1">
					<DarkModeSwitcher />
					<Link href="/" locale="de" className="hover:text-primary">
						DE
					</Link>
					<p>/</p>
					<Link href="/" locale="en" className="hover:text-primary">
						EN
					</Link>
				</div>
			</div>
			<MobileNav open={isNavOpen} className="overflow-scroll">
				<NavList />
			</MobileNav>
		</Navbar>
	);
}

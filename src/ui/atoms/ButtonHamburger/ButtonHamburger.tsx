"use client";
import { Divide as Hamburger } from "hamburger-react";
type ButtonHamburgerProps = {
	toggle: boolean;
	setToggle: (props: boolean) => void;
};

export const ButtonHamburger = ({ setToggle, toggle }: ButtonHamburgerProps) => {
	return <Hamburger duration={0.5} toggle={setToggle} toggled={toggle} rounded />;
};

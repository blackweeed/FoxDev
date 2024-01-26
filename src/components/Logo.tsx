import Link from "next/link";

export const Logo = ({className}:{className:string}) => {
	return (
		<Link href="/" className={`relative flex ${className}`}>
			FoXDev
		</Link>
	);
};

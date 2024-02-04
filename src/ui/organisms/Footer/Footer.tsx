import { Logo } from "../../atoms/Logo/Logo";
import { Newsletter } from "@/ui/molecules/Newsletter/Newsletter";
import { Footernav } from "@/ui/molecules/FooterNav/Footernav";
import { SectionCopyright } from "@/ui/molecules/SectionCopyright/SectionCopyright";

export function FooterWithSocialLinks() {
	return (
		<footer className="relative w-full bg-colorBackgroundDark py-8">
			<div className="mx-auto w-full max-w-7xl px-8">
				<div className="flex flex-col justify-between gap-4 md:grid-cols-2 lg:flex-row">
					<div>
						<Logo className="text-4xl font-medium text-colorPrimary" />
						<Newsletter />
					</div>
					<Footernav />
				</div>
				<SectionCopyright />
			</div>
		</footer>
	);
}

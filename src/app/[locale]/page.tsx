import { useTranslations } from "next-intl";
import { SectionHero } from "@/ui/molecules/SectionHero/SectionHero";
import { SectionAbout } from "@/ui/molecules/SectionAbout/SectionAbout";
import { SectionTechnology } from "@/ui/organisms/SectionTechnology";
import { SectionFAQ } from "@/ui/organisms/SectionFAQ";
import { SectionContact } from "@/ui/organisms/SectionContact/SectionContact";

type FAQItem = {
	question: string;
	answer: string;
};

export default function Home() {
	const hero = useTranslations("Hero Section");
	const about = useTranslations("About Section");
	const technologies = useTranslations("Technologies Section");
	const faq = useTranslations("FAQ Section");
	const faqArray = faq.raw("faq") as FAQItem[];

	return (
		<main className="flex flex-col items-center justify-center bg-colorBackground">
			<SectionHero
				welcome={hero("welcome")}
				heading={hero("heading")}
				subheading={hero("profession")}
			/>
			<SectionAbout about={about("about")} />
			<SectionTechnology
				heading={technologies("heading")}
				headingSpan={technologies("heading-span")}
			/>
			<SectionContact />
			<SectionFAQ faqArray={faqArray} heading={faq("heading")} headingSpan={faq("heading-span")} />
		</main>
	);
}

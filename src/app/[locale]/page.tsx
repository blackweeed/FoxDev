import { useTranslations } from "next-intl";
import { SectionHero } from "@/ui/molecules/SectionHero";
import { SectionAbout } from "@/ui/molecules/SectionAbout";
import { SectionTechnology } from "@/ui/organisms/SectionTechnology";
import { SectionFAQ } from "@/ui/organisms/SectionFAQ";

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
		<main className="flex flex-col items-center justify-center bg-colorBackground pt-10">
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
			{/* <div className="mt-20 flex w-full items-center justify-around px-40">
				<div className="basis-[50%]">
					<Image className="flip rotate-1" src="/FormLis.png" width={400} height={800} alt="" />
				</div>
				<Form />
			</div> */}
			<SectionFAQ faqArray={faqArray} heading={faq("heading")} headingSpan={faq("heading-span")} />
		</main>
	);
}

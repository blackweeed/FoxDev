import Image from "next/image";
import { useTranslations } from "next-intl";
import { Techstack } from "@/components/Techstack";
import { Form } from "@/components/Form";
import { FAQ } from "@/components/FAQ";

export default function Home() {
	const t = useTranslations("Hero Section");

	return (
		<main className="flex flex-col items-center justify-center pt-10">
			<section className="relative h-[70vh] w-full  px-40 ">
				<p className="mb-4 w-fit bg-primary px-2 py-1 text-2xl">{t("welcome")}</p>
				<h1 className="max-w-5xl text-[4rem] font-semibold">{t("heading")}</h1>
				<h2
					className="tracking wide mt-20 inline-flex text-[2.4125rem] font-medium text-black underline decoration-primary decoration-solid decoration-[3.6px]
"
				>
					{t("profession")}
				</h2>
			</section>
			<section className=" flex w-full items-center gap-8 pl-40 pr-0">
				<div className="basis-[45%]">
					<p className="text-4xl font-medium tracking-wide">
						Dążę do dokładnego poznania specyfiki Twojej firmy i jej celów. Posiadając taką wiedzę,
						jestem w stanie opracować unikalną strategię oraz zaprojektować stronę internetową,
						która nie tylko odzwierciedla wyjątkowość Twojego przedsiębiorstwa w przestrzeni
						cyfrowej, ale również wspiera realizację Twoich celów biznesowych.
					</p>
				</div>
				<div className="relative h-[700px] w-full basis-[55%]  ">
					<Image fill className="object-contain" src="/lis.png" alt="fox" />
				</div>
			</section>
			<section className="mt-6 w-full">
				<h2 className="mb-12 px-40 text-5xl font-semibold ">
					<span className="bg-primary px-1 py-0.5">Technologie</span> z których korzystam:
				</h2>
				<Techstack />
			</section>
			<div className="mt-20 flex w-full items-center justify-around px-40">
				<div className="basis-[50%]">
					<Image className="flip rotate-1" src="/FormLis.png" width={400} height={800} alt="" />
				</div>
				<Form />
			</div>
			<FAQ />
		</main>
	);
}

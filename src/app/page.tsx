import Image from "next/image";
import { Techstack } from "@/components/Techstack";
import { Form } from "@/components/Form";
import { FAQ } from "@/components/FAQ";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center pt-10">
			<section className="relative h-[70vh] w-full  px-40 ">
				<p className="mb-4 w-fit bg-primary px-2 py-1 text-2xl">Cześć!</p>
				<h1 className="max-w-5xl text-[4rem] font-semibold">
					Projektuje nowoczesne i użyteczne strony internetowe
				</h1>
				<h2
					className="tracking wide mt-20 text-[2.4125rem] font-medium text-black underline decoration-primary decoration-solid decoration-[3px]
"
				>
					Fullstack developer
				</h2>
			</section>
			<section className=" flex w-full items-center gap-8 pl-40 pr-0">
				<div className="basis-[45%]">
					<p className="text-4xl font-medium tracking-wide">
						Moim zadaniem jest poznanie twojego biznesu oraz zrozumienie celów do których dążysz. Te
						informacje pozwalają na wypracowanie strategii oraz rozplanowania strony, która wzmocni
						twój wizerunek w sieci i przełoży się na realizację założeń.
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

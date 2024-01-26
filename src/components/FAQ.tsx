"use client";

import { useState } from "react";

export const FAQ = () => {
	const [toggleAnswer, setToggleAnswer] = useState(0);

	const faq = [
		{
			question: "Co to jest web development?",
			answer:
				"Web development to proces tworzenia stron internetowych i aplikacji internetowych. Obejmuje zarówno aspekty techniczne, takie jak programowanie i kodowanie, jak i kreatywne, w tym projektowanie UI/UX.",
		},
		{
			question: "Jakie technologie są używane w web development?",
			answer:
				"W web development stosuje się różne technologie, w tym języki programowania takie jak HTML, CSS, JavaScript, oraz różne frameworki i biblioteki, takie jak React, Angular, Vue.js czy Node.js.",
		},
		{
			question: "Ile czasu zajmuje stworzenie strony internetowej?",
			answer:
				"Czas potrzebny na stworzenie strony internetowej zależy od wielu czynników, w tym od złożoności projektu, funkcjonalności, a także od doświadczenia i zasobów zespołu deweloperskiego.",
		},
		{
			question: "Jakie są najlepsze praktyki w web development?  ",
			answer:
				"Do najlepszych praktyk należą: tworzenie responsywnych stron, optymalizacja pod kątem wyszukiwarek (SEO), zapewnienie bezpieczeństwa, regularne testowanie i aktualizacje oraz skupienie się na użytkowniku i jego doświadczeniach.",
		},
		{
			question: "Czy mogę samodzielnie zarządzać swoją stroną po jej uruchomieniu?",
			answer:
				"Tak, wiele platform i systemów zarządzania treścią (CMS) umożliwia łatwe zarządzanie treścią na stronie bez potrzeby zaawansowanej wiedzy technicznej.",
		},
		{
			question: "Jakie są koszty stworzenia strony internetowej?",
			answer:
				"Koszty są różne i zależą od wielu czynników, takich jak złożoność projektu, funkcjonalności, użyte technologie oraz doświadczenie zespołu deweloperskiego.",
		},
	];

	const handleClick = (index: number) => {
		if (toggleAnswer === index) {
			setToggleAnswer(null);
		} else {
			setToggleAnswer(index);
		}
	};

	return (
		<section className="mt-16 w-full px-40">
			<h2 className="text-center text-4xl font-semibold ">
				Najczęściej zadawane{" "}
				<span className="underline decoration-primary decoration-4">pytania ?</span>
			</h2>
			<div className="mx-auto mt-10 flex w-[70%] flex-col gap-6">
				{faq.map((aq, index) => {
					return (
						<div
							key={aq.question}
							onClick={() => handleClick(index)}
							className="group flex h-fit w-full cursor-pointer flex-col justify-between rounded-lg px-10 py-4 shadow-sm shadow-primary"
						>
							<div className="flex items-center justify-between">
								<h3 className="text-lg font-medium">{aq.question}</h3>
								<button className="flex h-10 w-10 items-center justify-center rounded-full border-[1.6px] border-primary shadow-md transition-colors duration-300 group-hover:bg-primary group-hover:shadow-xl">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="2.1"
										stroke="currentColor"
										className={`h-6 w-6 transition-transform duration-500 ${toggleAnswer === index && "rotate-180"}`}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m19.5 8.25-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</button>
							</div>
							<p
								className={`mt-2 max-w-[90%] text-textLight transition-all duration-500 ${toggleAnswer === index ? "block" : "hidden"}`}
							>
								{aq.answer}
							</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

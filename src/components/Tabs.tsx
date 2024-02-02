"use client";

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

export function TabsDefault() {
	const data = [
		{
			label: "Strony www",
			value: "strony-www",
			desc: `W świecie cyfrowym, strona internetowa jest wizytówką każdej firmy. W naszym podejściu, tworzymy strony, które nie tylko przyciągają wzrok, ale są także intuicyjne i funkcjonalne. Dbamy o to, aby każda strona była unikalna i odzwierciedlała charakter Twojej działalności, jednocześnie zapewniając najlepsze doświadczenie użytkownika.`,
		},
		{
			label: "E-commerce",
			value: "sklepy-eCommerce",
			desc: `E-commerce to nie tylko sprzedaż, ale cała strategia cyfrowa. Tworzymy sklepy internetowe, które nie tylko pięknie się prezentują, ale są przede wszystkim efektywne, bezpieczne i łatwe w obsłudze. Nasze rozwiązania e-commerce są zawsze dopasowane do potrzeb Twojej firmy, pomagając Ci rozwinąć skrzydła na rynku online.`,
		},
		{
			label: "Aplikacje mobilne",
			value: "aplikacje-mobilne",
			desc: `Świat mobilny rozwija się w zawrotnym tempie, a my pomagamy Ci nadążyć za tym trendem. Projektujemy i tworzymy aplikacje mobilne, które nie tylko wyróżniają się na tle konkurencji, ale są również intuicyjne, szybkie i efektywne. Nasze aplikacje mobilne to połączenie innowacyjności, funkcjonalności i doskonałego designu, dostosowane do potrzeb Twoich użytkowników.`,
		},
	];

	return (
		<Tabs value="strony-www" className=" w-full lg:w-[60%]">
			<TabsHeader placeholder={undefined}>
				{data.map(({ label, value }) => (
					<Tab key={value} value={value} placeholder={undefined}>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody placeholder={undefined}>
				{data.map(({ value, desc }) => (
					<TabPanel key={value} value={value}>
						{desc}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
}

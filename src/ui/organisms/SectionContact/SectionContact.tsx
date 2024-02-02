import Image from "next/image";
import { Form } from "@/ui/molecules/Form/Form";

export const SectionContact = () => {
	return (
		<div className="mt-20 flex w-full items-center justify-around px-40">
			<div className="basis-[50%]">
				<Image className="flip rotate-1" src="/FormLis.png" width={400} height={800} alt="" />
			</div>
			<Form />
		</div>
	);
};

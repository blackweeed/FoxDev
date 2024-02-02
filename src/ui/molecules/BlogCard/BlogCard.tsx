import Image from "next/image";

type BlogCardProps = {
	src: string;
	alt: string;
	title: string;
	description: string;
	author: string;
	data: string;
};

export const BlogCard = ({ src, alt, title, description, author, data }: BlogCardProps) => {
	return (
		<div className="z-40 flex h-40 w-full gap-4 lg:min-h-[12.5rem] lg:max-w-[50rem] lg:gap-8">
			<div className="relative h-full w-[45%] overflow-hidden rounded-md shadow">
				<Image fill alt={alt} className="object-cover" src={src} />
			</div>
			<div className="flex w-[55%] flex-col justify-between">
				<h2 className="mb-3 text-lg font-semibold lg:text-2xl">{title}</h2>
				<p className="mb-4 text-sm text-colorText/80 lg:text-[1.075rem]">{description}</p>
				<span className="text-sm text-colorTextLighter lg:text-base">
					{author} | {data}
				</span>
			</div>
		</div>
	);
};

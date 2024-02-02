import type { Metadata } from "next";
import Image from "next/image";
import { HeadingSection } from "@/ui/atoms/HeadingSection/HeadingSection";
import { BlogSearch } from "@/ui/atoms/BlogSearch/BlogSearch";
import { BlogCard } from "@/ui/molecules/BlogCard/BlogCard";

export const metadata: Metadata = {
	title: "Blog section",
	description: "My frontend and backend blog.",
};

export default function BlogPage() {
	return (
		<section className="mt-40 flex flex-col justify-between px-6 lg:flex-row lg:px-20">
			<main className="flex flex-col gap-6">
				<HeadingSection
					heading="Najnowsze"
					headingSpan="wpisy"
					className=" [&>*:last-child]:underline [&>*:last-child]:decoration-colorPrimary"
				/>
				<BlogCard
					src="/images/sample-post.avif"
					alt="Nocne niebo pełne gwiazd"
					title="Podziwianie gwiazd"
					description="Odkrywanie tajemnic nocnego nieba jest fascynujące. W tym artykule dzielę się wskazówkami, jak rozpocząć przygodę z astronomią."
					author="Anna Nowak"
					data="2024-02-02"
				/>
				<BlogCard
					src="/lis.webp"
					alt="Zachód słońca nad górami"
					title="Zachód słońca nad górami"
					description="Ten artykuł opisuje moją podróż do gór i niezapomniane widoki zachodu słońca, które miałem okazję podziwiać."
					author="Jan Kowalski"
					data="2024-02-01"
				/>
			</main>
			<aside className="z-40 order-first mb-6 lg:order-last lg:mb-0 lg:min-w-96">
				<BlogSearch />
				<h3 className="my-6 text-xl font-semibold">TOP POSTS</h3>
				<div className="flex items-center gap-4 ">
					<Image
						width={100}
						alt=""
						height={100}
						src="/images/sample-post.avif"
						className="object-cover"
					/>
					<h4 className="text-lg font-medium">Welcome to my blog</h4>
				</div>
			</aside>
		</section>
	);
}

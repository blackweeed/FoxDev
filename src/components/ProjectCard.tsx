"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
	project: {
		title: string;
		slug: string;
		description: string;
		image: string;
		technologies: {
			title: string;
			bgColor: string;
			textColor: string;
		}[];
	};
};

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<>
			<Link href={`/portfolio/${project.slug}`} className="h-[450px] w-full ">
				<div className="relative h-[70%] w-full overflow-hidden rounded-3xl">
					<Image fill src={project.image} alt="" className="object-cover" />
				</div>
				<div className="">
					<div className="flex items-center justify-between  py-2">
						<h3 className="text-lg font-semibold">{project.title}</h3>
					</div>
					<p>{project.description}</p>
					<div className="group mt-4 inline-flex flex-wrap items-center gap-3">
						{project.technologies.map((technologie) => (
							<div
								key={technologie.title}
								className={`px-6 py-2 ${technologie.bgColor} ${technologie.textColor} rounded-xl border`}
							>
								{technologie.title}
							</div>
						))}
					</div>
				</div>
			</Link>
		</>
	);
}

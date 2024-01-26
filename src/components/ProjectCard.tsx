"use client";

import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
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
		<Card className="z-30 w-full max-w-[26rem] shadow-lg">
			<Link href={`/portfolio/${project.slug}`} className="w-full">
				<CardHeader floated={false} color="blue-gray">
					<Image src={project.image} alt={project.title} width={600} height={600} />
					<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
				</CardHeader>
			</Link>
			<CardBody>
				<div className="mb-3 flex items-center justify-between">
					<Typography variant="h5" color="black" className="font-medium">
						{project.title}
					</Typography>
				</div>
				<Typography color="gray">{project.description}</Typography>
				<div className="group mt-8 inline-flex flex-wrap items-center gap-3">
					{project.technologies.map((technologie) => (
						<div
							key={technologie.title}
							className={`px-6 py-2 ${technologie.bgColor} ${technologie.textColor} rounded-full border`}
						>
							{technologie.title}
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	);
}

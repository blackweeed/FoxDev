import { ProjectCard } from "@/components/ProjectCard";
import { TabsDefault } from "@/components/Tabs";
import { projects } from "@/data";

export default function PortfolioPage() {
	return (
		<div className="mt-40 px-6 lg:px-20">
			<h1 className="mb-4 max-w-5xl text-[4rem] font-semibold">Portfolio</h1>
			<TabsDefault />
			<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => {
					return <ProjectCard key={project.slug} project={project} />;
				})}
			</div>
		</div>
	);
}

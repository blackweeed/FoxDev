export default function SingleBlogPostPage({ params }: { params: { postSlug: string } }) {
	return (
		<div className="flex h-[500px] w-full items-center justify-center text-center text-2xl font-medium">
			{params.postSlug}
		</div>
	);
}

import { Button } from "@/ui/atoms/Button/Button";

export const Newsletter = () => {
	return (
		<>
			<p className="mt-12 text-white">Bądz na bierząco</p>
			<form className="mt-4 flex flex-col gap-5 lg:flex-row lg:gap-8">
				<input
					className="bg-transparent px-6 py-2 text-white shadow shadow-colorPrimary"
					type="text"
					placeholder="foxdev.pl"
				/>
				<Button variant="default">Subskrybuj</Button>
			</form>
		</>
	);
};

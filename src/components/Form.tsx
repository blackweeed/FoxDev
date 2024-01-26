"use client";

import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";

export function Form() {
	return (
		<Card className="p-8 text-primary" shadow={true}>
			<Typography variant="h3" color="blue-gray">
				Formularz kontaktowy
			</Typography>
			<Typography color="gray" className="mt-1 font-normal">
				Opowiedz o swoim projekcie.
			</Typography>
			<form className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96">
				<div className="mb-1 flex flex-col gap-6">
					<Typography variant="h5" className="-mb-3 text-primary ">
						Twoje imię
					</Typography>
					<Input
						size="lg"
						placeholder="John Doe"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
					/>
					<Typography variant="h5" className="-mb-3 text-primary ">
						Twój email
					</Typography>
					<Input
						size="lg"
						placeholder="email@mail.com"
						className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
						labelProps={{
							className: "before:content-none after:content-none",
						}}
					/>
					<Typography variant="h5" className="-mb-3 text-primary ">
						Twoja wiadomość
					</Typography>
					<textarea
						placeholder="Twoja wiadomość"
						className="peer h-full w-full rounded-md border border-blue-gray-200 !border-t-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:opacity-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:!border-t-gray-900 focus:border-t-transparent focus:outline-0 focus:placeholder:opacity-100 disabled:cursor-not-allowed  disabled:border-0 disabled:bg-blue-gray-50"
					></textarea>
				</div>
				<Checkbox
					label={
						<Typography variant="small" color="gray" className="flex items-center font-normal">
							Zgadzam się na
							<a href="#" className="font-medium transition-colors hover:text-gray-900">
								&nbsp;przetwarzanie danych osobowych
							</a>
						</Typography>
					}
					containerProps={{ className: "-ml-2.5" }}
				/>
				<Button className="mt-6 bg-bgColorDark text-base" fullWidth>
					Wyślij
				</Button>
			</form>
		</Card>
	);
}

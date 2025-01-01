import { useSelector } from "react-redux";

export default function BiographyPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 flex flex-col text-theme-text m-auto items-center max-w-[1170px]">
			<h1 className="theme-h1">Биография</h1>
			<section>
				<p className="flex">
					<h2></h2>
				</p>
			</section>
		</main>
	);
}

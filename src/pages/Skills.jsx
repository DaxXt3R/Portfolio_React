import { Link } from "react-router";

export default function SkillsPage() {
	return (
		<main className="px-4 flex flex-col lg:flex-row text-theme-text mt-8 justify-center">
			<section id="leftSkills" className="bg-green-400 flex flex-col flex-1 lg:max-w-[520px]">
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6 animateH1 text-center">Умения</h1>
			</section>
			<section id="rightDescription" className="bg-red-500 flex flex-col flex-1 lg:max-w-[520px]">
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6 animateH1 text-center">Моят Стак</h1>
			</section>
		</main>
	);
}

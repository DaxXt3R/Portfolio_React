import SocialLinks from "./SocialLinks";
import ButtonToPage from "./ButtonToPage";
import ImagePanel from "./ImagePanel";

import LanguageContext from "./Context/LanguageContext";
import { useContext } from "react";

export default function HomePage() {
	const { lang } = useContext(LanguageContext);

	return (
		<main className="px-4 my-auto ">
			<section className="flex flex-col lg:flex-row text-theme-text max-w-[1170px] mx-auto mt-8">
				<div className="flex flex-col justify-between ">
					<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6 animateH1">
						{["Hello, my name is", "Здравейте, аз съм"][lang]}
						<br />
						{["Diyan and I develop", "Диян и програмирам"][lang]}
						<br />
						<span className="text-theme-accent animateH1">Back-end решения.</span>
						<br />
						{["For you.", "За вас."][lang]}
					</h1>
					<SocialLinks className="hidden lg:flex"></SocialLinks>
				</div>

				<img
					src="src/assets/red-dayCOVER 1.png"
					alt=""
					className="object-contain h-[430px] lg:h-[530px] mr-4 lg:ml-auto drop-shadow-[4px_0px_6px_rgba(0,0,0,50%)]"
				/>

				<hr className="border-2 rounded border-theme-muted lg:hidden" />
				<SocialLinks className="lg:hidden"></SocialLinks>
			</section>
			<hr className="border-2 rounded border-theme-muted max-w-[1170px] mx-auto" />

			<section className="flex flex-col lg:flex-row gap-4 py-4 w-full lg:justify-between max-w-[1170px] lg:max-h-[244px] mx-auto">
				<h2 className="font-bold text-xl text-theme-bold lg:hidden">Това са личните ми проекти</h2>

				<ImagePanel
					src={"src/assets/nuchan panel.png"}
					className={"lg:w-[340px] mx-4 lg:mx-0"}
					// desc={"NUchan е козметичен ъпдейт на 4chan.org с добавени функции"}
					desc={
						[
							"NUchan is a cosmetic visual update to 4chan.org with added features",
							"NUchan е козметичен ъпдейт на 4chan.org с добавени функции",
						][lang]
					}></ImagePanel>
				<ImagePanel src={"src/assets/nuchan panel.png"} className={"lg:w-[340px] mx-4 lg:mx-0"}></ImagePanel>

				<div className="flex-col flex lg:w-[470px]">
					<h2 className="font-bold text-xl text-theme-bold hidden lg:block">
						{["These are my personal projects.", "Това са личните ми проекти."][lang]}
					</h2>
					<p className="text-theme-text text-justify font-medium">
						{
							[
								"They're not many, because right now I'm focusing on quality over quantity. I'm orienting myself toward Full-Stack development because I want to be able to build applications from bottom to top and understand every step of the production process. This list will steadily grow, but If you like what you see so far I'd be happy to work with you!",
								"Не са много на брой, защото се концентрирам в/у качество вместо количество. Ориентирвам се около разработването на Full-Stack приложения, защото искам да разбирам цялостния процес от-до. Списъкът постепенно ще расте във времето, но ако харесвате това което виждате за сега ще се радвам да работим заедно!",
							][lang]
						}
					</p>

					<ButtonToPage href="/test1">{["PROJECTS", "ПРОЕКТИ"][lang]}</ButtonToPage>
				</div>
			</section>
		</main>
	);
}

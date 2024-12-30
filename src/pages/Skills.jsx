import TechnologyBar from "../components/TechnologyBar";
import ButtonToPage from "../components/ButtonToPage";
import { useSelector } from "react-redux";

export default function SkillsPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 my-auto flex flex-col lg:flex-row text-theme-text lg:gap-20 gap-14 justify-center">
			<section id="leftSkills" className=" flex flex-col flex-1 lg:max-w-[530px] relative gap-4">
				<h1 className="theme-h1 text-center">Умения</h1>
				<ul className="flex-col gap-3 flex relative z-10">
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[-16px] left-14 ">
						Front-end
					</li>
					<TechnologyBar
						icon="/technology logos/JavaScript-logo.png"
						level={50}
						link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
					/>
					<TechnologyBar
						icon="/technology logos/HTML5_logo_and_wordmark.svg.png"
						level={25}
						link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
					/>
					<TechnologyBar icon="/technology logos/Tailwind_CSS_Logo.svg.png" link={"https://tailwindcss.com/"} />
					<TechnologyBar icon="/technology logos/React-icon.svg.png" link={"https://react.dev/"} />
					<TechnologyBar
						icon="/technology logos/Adobe-Photoshop-Logo-2015-2019.png"
						link={"https://www.adobe.com/products/photoshop.html#"}
					/>
					<TechnologyBar icon="/technology logos/Figma-logo.svg.png" link={"https://www.figma.com/"} />
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[225px] left-14 ">
						Back-end
					</li>
					<TechnologyBar icon="/technology logos/next-js.svg" link={"https://nextjs.org/"} />
					<TechnologyBar icon="/technology logos/Git_icon.svg.png" link={"https://git-scm.com/"} />
					<TechnologyBar
						icon="/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
						link={"https://www.mongodb.com/"}
					/>
					<TechnologyBar icon="/technology logos/Python-logo-notext.svg.png" link={"https://www.python.org/"} />
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[385px] left-14 ">DevOps</li>
					<TechnologyBar
						icon="/technology logos/Amazon-Web-Services-AWS-Logo.png"
						link={"https://aws.amazon.com/"}
					/>
					<li className="z-0" id="verticalLines">
						<hr className="border-theme-muted border-2 border-dashed rotate-0" />
					</li>
					<li className="flex justify-between ml-16 mr-4">
						<span>начинаещ</span>
						<span>основни</span>
						<span>напреднал</span>
					</li>
				</ul>
			</section>

			<section id="rightDescription" className=" flex flex-col flex-1 lg:max-w-[530px] gap-10">
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1 text-center">Моят Стак</h1>
				<div className="flex justify-evenly items-center h-32">
					<div className="flex flex-col w-20 h-full items-center ">
						<img src="public/technology logos/React-icon.svg.png" className="my-auto drop-shadow-2" alt="" />
						<h4 className="font-bold lg:text-xl text-[#60DAFB] drop-shadow-md">REACT</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center ">
						<img src="public/technology logos/next-js.svg" className="my-auto drop-shadow-2" alt="" />
						<h4 className="font-bold lg:text-xl text-black drop-shadow-md">NEXT</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center justify-between">
						<img
							src="/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
							className="my-auto h-2/3 drop-shadow-2"
							alt=""
						/>
						<h4 className="font-bold lg:text-xl text-[#599636] drop-shadow-md">MongoDB</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center">
						<img
							src="/technology logos/Firebase-logo-02.png"
							className="my-auto drop-shadow-2"
							alt=""
						/>
						<h4 className="font-bold lg:text-xl text-[#FF9100] drop-shadow-md">Firebase</h4>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col gap-4 font-medium text-theme-text">
					<article className="flex-1">
						<h2 className="theme-h2">В момента използвам</h2>
						<p className="theme-p">
							{
								[
									"",
									"React за front-end с Tailwind класове и DaisyUI ако ми трябват бързи компоненти. Next.js за API-овете ми",
								][lang]
							}
						</p>
					</article>
					<article className="flex-1">
						<h2 className="theme-h2">В бъдещето ще</h2>
						<p className="theme-p">
							{
								[
									"learn more about SQL databases like PostgreSQL since they are the industry-standart",
									"науча повече за SQL бази данни като PostgreSQL тъй като са индустриален стан-дарт. Ще разгледам инстру-менти като Linux , Monit, GitHub Docker, Kubernetes. Също така имам силен интерес към ученето на Python, може би със Django, тъй като в началото програмирах игри с Python, много да станаопитен разработчик на видео игри.",
								][lang]
							}
						</p>
					</article>
				</div>
				<ButtonToPage href={"/skills/projects"}>КЪМ ПРОЕКТИ</ButtonToPage>
			</section>
		</main>
	);
}

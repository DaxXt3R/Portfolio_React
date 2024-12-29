import { Link } from "react-router";
import TechnologyBar from "../components/TechnologyBar";
import ButtonToPage from "../components/ButtonToPage";
import { useSelector } from "react-redux";

export default function SkillsPage() {

	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 my-auto flex flex-col lg:flex-row text-theme-text lg:gap-20 gap-14 justify-center">
			<section id="leftSkills" className=" flex flex-col flex-1 lg:max-w-[520px] relative gap-4">
				<h1 className="theme-h1 text-center">Умения</h1>
				<ul className="flex-col gap-3 flex relative z-10">
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[-16px] left-14 ">
						Front-end
					</li>
					<TechnologyBar
						icon="public/technology logos/JavaScript-logo.png"
						level={50}
						link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
					/>
					<TechnologyBar
						icon="public/technology logos/HTML5_logo_and_wordmark.svg.png"
						level={25}
						link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
					/>
					<TechnologyBar icon="public/technology logos/Tailwind_CSS_Logo.svg.png" link={"https://tailwindcss.com/"} />
					<TechnologyBar icon="public/technology logos/React-icon.svg.png" link={"https://react.dev/"} />
					<TechnologyBar
						icon="public/technology logos/Adobe-Photoshop-Logo-2015-2019.png"
						link={"https://www.adobe.com/products/photoshop.html#"}
					/>
					<TechnologyBar icon="public/technology logos/Figma-logo.svg.png" link={"https://www.figma.com/"} />
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[225px] left-14 ">
						Back-end
					</li>
					<TechnologyBar icon="public/technology logos/next-js.svg" link={"https://nextjs.org/"} />
					<TechnologyBar icon="public/technology logos/Git_icon.svg.png" link={"https://git-scm.com/"} />
					<TechnologyBar
						icon="public/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
						link={"https://www.mongodb.com/"}
					/>
					<TechnologyBar icon="public/technology logos/Python-logo-notext.svg.png" link={"https://www.python.org/"} />
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[385px] left-14 ">DevOps</li>
					<TechnologyBar
						icon="public/technology logos/Amazon-Web-Services-AWS-Logo.png"
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

			<section id="rightDescription" className=" flex flex-col flex-1 lg:max-w-[520px] gap-10">
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1 text-center">Моят Стак</h1>
				<div className="flex justify-evenly items-center h-32">
					<div className="flex flex-col w-20 h-full items-center">
						<img src="public/technology logos/React-icon.svg.png" className="my-auto" alt="" />
						<h4 className="font-bold lg:text-xl text-theme-text text-[#60DAFB]">REACT</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center ">
						<img src="public/technology logos/next-js.svg" className="my-auto" alt="" />
						<h4 className="font-bold lg:text-xl text-theme-text text-black">NEXT</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center justify-between">
						<img
							src="public/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
							className="my-auto h-2/3"
							alt=""
						/>
						<h4 className="font-bold lg:text-xl text-theme-text text-[#599636]">MongoDB</h4>
					</div>
					<div className="flex flex-col w-20 h-full items-center">
						<img src="public/technology logos/Amazon-Web-Services-AWS-Logo.png" className="my-auto" alt="" />
						<h4 className="font-bold lg:text-xl text-theme-text text-[#FF8E04] ">AWS</h4>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col gap-4 font-medium text-theme-text">
					<article className="flex-1">
						<h2 className="theme-h2">В момента използвам</h2>
						<p className="theme-p">
							Популярния MERN стак, защото искам да съм полезен за максимално много работо-датели, тъй като React е
							индустриалния стандарт. Не съм Web Dev специалист още, но за кратка година изградих функционално
							приложение с
						</p>
					</article>
					<article className="flex-1">
						<h2 className="theme-h2">В бъдещето ще</h2>
						<p className="theme-p">
							Популярния MERN стак, защото искам да съм полезен за максимално много работо-датели, тъй като React е
							индустриалния стандарт. Не съм Web Dev специалист още, но за кратка година изградих функционално
							приложение с Популярния MERN стак, защото искам да съм полезен за максимално много работо-датели, тъй като
							React е индустриалния стандарт. Не съм Web Dev спеонално приложение с{" "}
						</p>
					</article>
				</div>
				<ButtonToPage href={"/skills/projects"}>КЪМ ПРОЕКТИ</ButtonToPage>
			</section>
		</main>
	);
}

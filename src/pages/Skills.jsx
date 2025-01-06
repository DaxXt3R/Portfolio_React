import TechnologyBar from "../components/TechnologyBar";
import ButtonToPage from "../components/ButtonToPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

// {["english","bulgarian"][lang]}

export default function SkillsPage() {
	const lang = useSelector((state) => state.theme.lang);
	const navigate = useNavigate();

	useEffect(() => {
		function handleScroll(event) {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			const isAtTop = window.scrollY == 0;

			if (event.deltaY > 0 && isAtBottom) {
				navigate("/aboutMe");
				window.scrollTo({ top: 0 });
			}
			if (event.deltaY < 0 && isAtTop) {
				navigate("/");
			}
		}
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);
	}, [navigate]);

	return (
		<main className="px-4 my-auto flex flex-col lg:flex-row text-theme-text lg:gap-20 gap-14 justify-center">
			<motion.section
				id="leftSkills"
				className=" flex flex-col flex-1 lg:max-w-[530px] relative gap-4 justify-between"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<h1 className="theme-h1 text-center">{["Skills", "Умения"][lang]}</h1>
				<ul className="flex-col flex relative z-10">
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[-7px] left-14 bg-theme-bg z-10">
						Front-end
					</li>
					<TechnologyBar
						icon="/technology logos/JavaScript-logo.png"
						level={60}
						link={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
					/>
					<TechnologyBar
						icon="/technology logos/HTML5_logo_and_wordmark.svg.png"
						level={90}
						link={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
					/>
					<TechnologyBar
						icon="/technology logos/Tailwind_CSS_Logo.svg.png"
						link={"https://tailwindcss.com/"}
						level={75}
					/>
					<TechnologyBar
						icon="/technology logos/React-icon.svg.png"
						link={"https://react.dev/"}
						level={60}
					/>
					<TechnologyBar
						icon="/technology logos/Adobe-Photoshop-Logo-2015-2019.png"
						link={"https://www.adobe.com/products/photoshop.html#"}
						level={80}
					/>
					<TechnologyBar
						icon="/technology logos/Figma-logo.svg.png"
						link={"https://www.figma.com/"}
						level={50}
					/>
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[280px] left-14 bg-theme-bg z-10">
						Back-end
					</li>
					<TechnologyBar
						icon="/technology logos/next-js.svg"
						link={"https://nextjs.org/"}
						level={40}
					/>
					<TechnologyBar
						icon="/technology logos/Git_icon.svg.png"
						link={"https://git-scm.com/"}
						level={35}
					/>
					<TechnologyBar
						icon="/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
						link={"https://www.mongodb.com/"}
						level={25}
					/>
					<TechnologyBar
						icon="/technology logos/Python-logo-notext.svg.png"
						link={"https://www.python.org/"}
						level={25}
					/>
					<li className="font-bold text-xl text-theme-text italic text-center absolute top-[470px] left-14 bg-theme-bg z-10">
						DevOps
					</li>
					<TechnologyBar
						icon="/technology logos/Amazon-Web-Services-AWS-Logo.png"
						link={"https://aws.amazon.com/"}
						level={15}
					/>

					<li className="flex justify-between ml-16 mr-4">
						<span>начинаещ</span>
						<span>основни</span>
						<span>напреднал</span>
					</li>
				</ul>
			</motion.section>

			<motion.section
				id="rightDescription"
				className=" flex flex-col flex-1 lg:max-w-[530px] gap-10"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}>
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1 text-center">
					{["My stack", "Моят стак"][lang]}
				</h1>
				<div className="flex justify-evenly items-center h-32">
					<div className="flex flex-col w-20 h-full items-center ">
						<img
							src="technology logos/React-icon.svg.png"
							className="my-auto drop-shadow-2"
							alt=""
						/>
						<h5 className="font-bold lg:text-xl text-[#60DAFB] drop-shadow-md">REACT</h5>
					</div>
					<div className="flex flex-col w-20 h-full items-center ">
						<img
							src="public/technology logos/next-js.svg"
							className="my-auto drop-shadow-2"
							alt=""
						/>
						<h5 className="font-bold lg:text-xl text-black drop-shadow-md">NEXT</h5>
					</div>
					<div className="flex flex-col w-20 h-full items-center justify-between">
						<img
							src="/technology logos/mongodb-original-icon-921x2048-hvrb89lu.png"
							className="my-auto h-2/3 drop-shadow-2"
							alt=""
						/>
						<h5 className="font-bold lg:text-xl text-[#599636] drop-shadow-md">MongoDB</h5>
					</div>
					<div className="flex flex-col w-20 h-full items-center">
						<img
							src="/technology logos/Firebase-logo-02.png"
							className="my-auto drop-shadow-2"
							alt=""
						/>
						<h5 className="font-bold lg:text-xl text-[#FF9100] drop-shadow-md">Firebase</h5>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col gap-8 font-medium text-theme-text">
					<article className="flex-1">
						<h2 className="theme-h2 h-8 overflow-hidden">
							{["Right now I'm using", "В момента ползвам"][lang]}
						</h2>
						<p className="theme-p hyphens-auto">
							{["React for the front-end with ", "React за front-end с "][lang]}
							<a href="https://tailwindcss.com/" className="text-theme-accent hover:underline">
								Tailwind
							</a>
							{[" classes and ", " класове и "][lang]}
							<a href="https://daisyui.com/" className="text-theme-accent hover:underline">
								DaisyUI
							</a>
							{
								[" if I just need some generic components. ", " ако ми трябват бързи компоненти. "][
									lang
								]
							}
							<a href="https://redux.js.org/" className="text-theme-accent hover:underline">
								Redux
							</a>
							{
								[
									" for component wide state management and ",
									" за раздаване на данни м/у компоненти и ",
								][lang]
							}
							<a href="https://motion.dev/" className="text-theme-accent hover:underline">
								Motion
							</a>
							{[" for animations. ", " за анимации. "][lang]}
							<a href="https://nextjs.org/" className="text-theme-accent hover:underline">
								Next
							</a>
							{[" for animations. ", " за back-end с  "][lang]}
							<a href="https://mongoosejs.com/" className="text-theme-accent hover:underline">
								Mongoose
							</a>
							{[" for animations. ", " за интеграция с MongoDB "][lang]}
							<a href="https://www.passportjs.org/" className="text-theme-accent hover:underline">
								Passport
							</a>
							{[" for authentication ", " за автентикация "][lang]}
						</p>
					</article>
					<article className="flex-1">
						<h2 className="theme-h2 h-8 overflow-hidden">
							{["In the future I will", "В бъдещето ще"][lang]}
						</h2>
						<p className="theme-p">
							{
								[
									"learn more about SQL databases like PostgreSQL since they are the industry-standart. I will explore Linux, Monit, Github, Docker, Kubernetes. I also have a strong interest for Python and Django, since at the start of my coding journey I was tinkering with video-game program-ming in Python. I would really like to become an experienced video-game developer.",
									"науча повече за SQL бази данни като PostgreSQL тъй като са индустриален стан-дарт. Ще разгледам инстру-менти като Linux, Monit, GitHub, Docker, Kubernetes. Също така имам силен интерес към ученето на Python, може би със Django, тъй като в началото програ-мирах игри с Python, много да стана опитен разработчик на видео игри.",
								][lang]
							}
						</p>
					</article>
				</div>
				<ButtonToPage href={"/skills/projects"}>{["PROJECTS", "ПРОЕКТИ"][lang]}</ButtonToPage>
			</motion.section>
		</main>
	);
}

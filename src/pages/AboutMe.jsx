import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import HistoryTimeline from "../components/HistoryTimeline";
import ButtonToPage from "../components/ButtonToPage";
import { motion } from "motion/react";
import { useSwipeable } from "react-swipeable";


export default function AboutMepage() {
	const lang = useSelector((state) => state.theme.lang);
	const navigate = useNavigate();
	
	const handleSwipes = useSwipeable({
		onSwipedUp: () => {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (isAtBottom) {
				navigate("/contacts");
				window.scrollTo({ top: 0 });
			}
		},
		onSwipedDown: () => {
			const isAtTop = window.scrollY == 0;
			if (isAtTop) {
				navigate("/skills");
			}
		},
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	
	useEffect(() => {
		function handleScroll(event) {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			const isAtTop = window.scrollY == 0;

			if (event.deltaY > 0 && isAtBottom) {
				/* scroll down */
				navigate("/contacts");
				window.scrollTo({ top: 0 });
			}
			if (event.deltaY < 0 && isAtTop) {
				/* scroll up */
				navigate("/skills");
			}
		}
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);
	}, [navigate]);

	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] my-auto mx-auto gap-4" {...handleSwipes}>
			<motion.section
				className=" mb-10 w-full"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{/* ---------------- TIMELINE DESKTOP ---------------- */}
				<h1 className="theme-h1 lg:pb-10">{["My journey so far", "Моят път до тук"][lang]}</h1>

				<HistoryTimeline />

				{/* ---------------- TIMELINE MOBILE ---------------- */}
				<ul className="lg:hidden timeline timeline-vertical duration-500">
					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)] ">
						<span className="timeline-start">2016</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							school
						</span>
						<p className="timeline-paragraph">
							{
								[
									"Graduated construction trade high school",
									"Завърших проф. гимназия по строителство и архитектура",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>

					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2016</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							menu_book
						</span>
						<p className="timeline-paragraph">
							{
								[
									"Got accepted into university of architecture, construction and geodesy",
									"Постъпих в УАСГ, спец. архитектура",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>

					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2019</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							stadia_controller
						</span>
						<p className="timeline-paragraph">
							{" "}
							{
								[
									"Started coding video games as a hobby",
									"Започнах програмиране на видео игри като хоби",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>

					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2021</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							school
						</span>
						<p className="timeline-paragraph">
							{
								[
									"Graduated university with bachelors in architecture, masters in industrial buildings",
									"Завърших УАСГ, бакалавър архитектура, магистър Промишлени сгради",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>
					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2022</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							work
						</span>
						<p className="timeline-paragraph">
							{" "}
							{
								[
									"Started working at MYX, drafting/planning cell towers",
									"Работа в MYX, в/у телекомуникационни кули",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>
					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2024</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							heart_broken
						</span>
						<p className="timeline-paragraph">
							{" "}
							{
								[
									"Due to wrong expectations I lost my passion for construction",
									"Поради заблудени очаквания загубих страстта за строителството",
								][lang]
							}
						</p>
						<hr className="bg-theme-text" />
					</li>
					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2025</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							terminal
						</span>
						<p className="timeline-paragraph">
							{" "}
							{
								[
									"I decided to dive fully into tech and software development",
									"Реших да навляза изцяло в компютърните технологии",
								][lang]
							}
						</p>
					</li>
				</ul>
			</motion.section>

			<motion.section
				className="flex flex-col lg:flex-row lg:gap-28 lg:h-fit gap-10 my-4"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}>
				<article className="flex-1">
					<h1 className="theme-h1">{["Upbringing", "Произход"][lang]}</h1>
					<div className="w-full  flex lg:flex-row flex-col gap-4">
						<img
							src="/biography/gallery_9.png"
							alt=""
							className="lg:w-2/5 lg:object-cover object-contain h-[350px] rounded-lg bg-theme-muted border-[1px] border-theme-text shadow-1"
						/>

						<p className="lg:w-3/5 text-justify">
							{
								[
									"Born in a small town in Bulgaria, I was inspired by my dad's construction career and so I enrolled in my town's trade school for construction. Architecture was a practical way forward. Shortly after high-school I got my architectural masters degree from university. Along the way I discovered a passion for programming, as a hobby on summer breaks. A couple of months ago I left my architectural job and decided to dive completely in the world of tech.",
									"Роден в гр.Сливен, бях вдъхновен от кариерата на баща ми в строителството, влязох в проф.гимназия по строителство. Избрах архитектурата като практична посока. След това завърших архитектура - магистър в УАСГ. По пътя, обаче открих страст за програмиране, беше ми хоби през лятните ваканции. Преди няколко месеца напуснах работа като чертожник и реших да се гмурна изцяло в уеб-програмиране.",
								][lang]
							}
						</p>
					</div>
				</article>

				<article className="flex-1 text-end">
					<h1 className="theme-h1 text-start">{["Education", "Обучение"][lang]}</h1>
					<div className="flex gap-4 w-full mb-4 flex-col lg:flex-row">
						<img
							src="/biography/Screenshot 2025-01-01 021622.png"
							alt=""
							className="lg:w-2/5 object-contain h-[350px] rounded-lg border-[1px] border-theme-text shadow-1 bg-white"
						/>
						<p className="lg:w-3/5 text-justify">
							{
								[
									"I started tinkering with small video-games and trading cryptocurrencies, until eventually I became able to make complete web apps. In the begining I learned through YouTube videos, but now I have completed multiple Udemy Bootcamps and can read technical documentation. I started from the bottom now I'm here and my portfolio shows that. I haven't reached my full potential yet, I still have a lot to learn, but I'm not scared, in fact I'm thrilled about what the future entails.",
									"Започнах с кодиране на малки видео-игри и обмяна на криптовалути, евентуално стигнах до разработка на уеб приложения. В началото се учех от YouTube клипове, но сега имам завършени професионални курсове от Udemy, и чета документации. Сам се обучех и от нищото стигнах до тук, портфолиото ми показва това. Това не е краят на способностите ми, имам още много да уча, но не ме е изстрах, напротив развълнуван съм за бъдещето.",
								][lang]
							}
							<br />
						</p>
					</div>
					<ButtonToPage href={"/aboutMe/biography"}>
						{["BIOGRAPHY", "БИОГРАФИЯ"][lang]}
					</ButtonToPage>
				</article>
			</motion.section>
		</main>
	);
}

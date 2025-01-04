import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import HistoryTimeline from "../components/HistoryTimeline";
import ButtonToPage from "../components/ButtonToPage";

export default function AboutMepage() {
	const lang = useSelector((state) => state.theme.lang);

	const navigate = useNavigate();

	useEffect(() => {
		function handleScroll(event) {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			const isAtTop = window.scrollY == 0;

			if (event.deltaY > 0 && isAtBottom) {
				/* scroll down */
				navigate("/contacts");
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
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] my-auto mx-auto gap-4">
			<section className=" mb-10 w-full">
				{/* ---------------- TIMELINE DESKTOP ---------------- */}
				<h1 className="theme-h1 pb-10">{["My journey so far", "Моят път до тук"][lang]}</h1>

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
							Завърших Сливенската проф. гимназия по строителство и архитектура
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
						<p className="timeline-paragraph">Постъпих в УАСГ, специалност архитектура</p>
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
						<p className="timeline-paragraph">Започнах програмиране на видео игри като хоби</p>
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
							Завърших УАСГ, бакалавър архитектура, магистър Промишлени сгради
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
						<p className="timeline-paragraph">Работа в MYX, като спец. обработка на данни</p>
						<hr className="bg-theme-text" />
					</li>
					<li className="grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_7fr)]">
						<hr className="bg-theme-text" />
						<span className="timeline-start">2024</span>
						<span
							className="timeline-icon material-symbols-rounded"
							style={{ fontVariationSettings: "'FILL' 1" }}>
							sentiment_dissatisfied
						</span>
						<p className="timeline-paragraph">### ### ### ### ### ### ### ### ### ### ###</p>
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
						<p className="timeline-paragraph">### ### ### ### ### ### ### ### ### ### ###</p>
					</li>
				</ul>
			</section>

			<section className="flex flex-col lg:flex-row lg:gap-28 lg:h-fit gap-10 mt-4">
				<article className="flex-1">
					<h1 className="theme-h1">{["Upbringing", "Произход"][lang]}</h1>
					<div className="w-full  flex flex-row gap-4">
						<img src="imageDefault.jpg" alt="" className="w-2/5 lg:object-cover object-contain " />

						<p className="w-3/5 text-justify">
							{
								[
									"Growing up, I was a curious and determined kid with big dreams but no clear direction. Inspired by my dad’s construction career, I pursued architecture as a practical path. Along the way, I discovered my passion for solving problems and creating, which eventually led me to programming—a field where I could build, innovate, and challenge myself in ways I’d never imagined.",
									"Като дете бях любопитен и упорит, с големи мечти, но без ясно направление. Вдъхновен от кариерата на баща ми в строителството, избрах архитекту-рата като практичен път. По пътя открих страстта си към реша-ването на проблеми и създава-нето, която в крайна сметка ме насочи към програмирането – поле, в което мога да изграждам, иновирам и се предизвиквам.",
								][lang]
							}
						</p>
					</div>
				</article>

				<article className="flex-1 text-end">
					<h1 className="theme-h1 text-start">{["Education", "Обучение"][lang]}</h1>
					<div className="flex gap-4 w-full mb-2">
						<img src="imageDefault.jpg" alt="" className="w-2/5 object-cover" />
						<p className="w-3/5 text-justify">
							{
								[
									"I earned a degree in architecture, but my true passion emerged outside the classroom when I began teaching myself to code. From experimenting with game engines to completing professional courses like The Web Developer Bootcamp and React – The Complete Guide, I’ve built a strong foundation in web development and software engineering, driven by curiosity and a commitment to lifelong learning.",
									"Завърших архитектура, но истин-ската ми страст се разкри извън университета, когато започнах да се уча да програмирам. От експериментиране с видео игри до завършване на професионал-ни курсове като The Web Developer Bootcamp и React – The Complete Guide, изградих стабил-на основа в уеб разработката и софтуерното инженерство, воден от любопитство и стремеж към постоянно развитие.",
								][lang]
							}
							<br />
						</p>
					</div>
					<ButtonToPage href={"/aboutMe/biography"}>
						{["BIOGRAPHY", "БИОГРАФИЯ"][lang]}
					</ButtonToPage>
				</article>
			</section>
		</main>
	);
}

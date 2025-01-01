import { useSelector } from "react-redux";
import { Link } from "react-router";
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
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] my-auto mx-auto">
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

			<section className="flex flex-col lg:flex-row lg:gap-28 lg:h-[400px] gap-10 mt-10">
				<article className="flex-1">
					<h1 className="theme-h1">{["Upbringing", "Произход"][lang]}</h1>
					<div className="w-full  flex flex-row gap-4">
						<img src="imageDefault.jpg" alt="" className="w-2/5 lg:object-cover object-contain " />

						<p className="w-3/5 text-justify overflow-hidden">
							{
								[
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum pariatur fuga magnam adipisci enim nobis. Aliquid, illo sit. Magnam nulla harum hic quam dolorum totam. Nisi enim nesciunt deleniti? Earum, veniam dignissimos? Adipisci sunt vitae iure quo neque, nihil enim tenetur sit soluta, iste nulla est deserunt atque doloribus, nam repellat maxime modi pariatur. Laudantium ratione repellendus, incidunt dolorum animi minus alias sed reprehenderit, perspiciatis adipisci soluta quibusdam?",
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum pariatur fuga magnam adipisci enim nobis. Aliquid, illo sit. Magnam nulla harum hic quam dolorum totam. Nisi enim nesciunt deleniti? Earum, veniam dignissimos? Adipisci sunt vitae iure quo neque, nihil enim tenetur sit soluta, iste nulla est deserunt atque doloribus, nam repellat maxime modi pariatur.unt vitae iure quo neque, nihil enim tenetur sit soluta, iste nulla est deserunt atque doloribus, nam repellat maxime modi pariatur.",
								][lang]
							}
						</p>
					</div>
				</article>

				<article className="flex-1">
					<h1 className="theme-h1">{["Education", "Обучение"][lang]}</h1>
					<div className="flex gap-4 size-full">
						<img src="imageDefault.jpg" alt="" className="w-2/5 object-cover" />
						<p className="w-3/5 text-justify">
							{
								[
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum pariatur fuga magnam adipisci enim nobis. Aliquid, illo sit. Magnam nulla harum hic quam dolorum totam. Nisi enim nesciunt deleniti? Earum, veniam dignissimos? Adipisci sunt vitae iure quo neque, nihil enim tenetur sit soluta, iste nulla est deserunt atque doloribus, nam repellat maxime modi pariatur. Laudantium ratione repellendus, incidunt dolorum animi minus alias sed reprehenderit, perspiciatis adipisci soluta quibusdam?",
									"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum laborum pariatur fuga magnam adipisci enim nobis. Aliquid, illo sit. Magnam nulla harum hic quam dolorum totam. Nisi enim nesciunt deleniti? Earum, veniam dignissimos? Adipisci sunt vitae iure quo neque, nihil enim tenetur sit soluta, iste nulla est deserunt atque doloribus, nam repellat maxime modi pariatur. Laudantium ratione repellendus, incidunt dolorum animi minus alias sed reprehenderit, perspiciatis adipisci soluta quibusdam?",
								][lang]
							}
							<ButtonToPage href={"/aboutMe/biography"}>
								{["BIOGRAPHY", "БИОГРАФИЯ"][lang]}
							</ButtonToPage>
						</p>
					</div>
				</article>
			</section>
		</main>
	);
}

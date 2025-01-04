import HistoryTimelineEvent from "./HistoryTimelineEvent";
import { useSelector } from "react-redux";

export default function HistoryTimeline() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<section className="w-full">
			<hr className="border-2 border-theme-text rounded translate-y-[114px]" />
			<ul className="flex z-10 relative">
				<HistoryTimelineEvent year={2016} icon={"school"}>
					{
						[
							"Graduated construction trade high school",
							"Завърших проф. гимназия по строителство и архитектура",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"menu_book"} textBelow>
					{
						[
							"Got accepted into university of architecture, construction and geodesy",
							"Постъпих в УАСГ, спец. архитектура",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2019} icon={"stadia_controller"}>
					{
						[
							"Started coding video games as a hobby",
							"Започнах програмиране на видео игри като хоби",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2021} icon={"school"} textBelow>
					{
						[
							"Graduated university with bachelors in architecture, masters in industrial buildings",
							"Завърших УАСГ, бакалавър архитектура, магистър Промишлени сгради",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2022} icon={"work"}>
					{
						[
							"Started working at MYX, drafting/planning cell towers",
							"Работа в MYX, в/у телекомуникационни кули",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2024} icon={"heart_broken"} textBelow>
					{
						[
							"Due to wrong expectations I lost my passion for construction",
							"Поради заблудени очаквания загубих страстта за строителството",
						][lang]
					}
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2025} icon={"terminal"}>
					{
						[
							"I decided to dive fully into tech and software development",
							"Реших да навляза изцяло в компютърните технологии",
						][lang]
					}
				</HistoryTimelineEvent>
			</ul>
		</section>
	);
}

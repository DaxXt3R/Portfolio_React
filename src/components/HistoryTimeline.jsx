import HistoryTimelineEvent from "./HistoryTimelineEvent";

export default function HistoryTimeline() {
	return (
		<section className="w-full">
			<hr className="border-2 border-theme-text rounded translate-y-[104px]" />
			<ul className="flex z-10 relative">
				<HistoryTimelineEvent year={2016} icon={"school"}>
					Завърших проф. гимназия по строителство и архитектура
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"} textBelow>
					Постъпих в УАСГ, спец. архитектура
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"}>
					Започнах програмиране на видео игри като хоби
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"} textBelow>
					Завърших УАСГ, бакалавър архитектура, магистър Промишлени сгради
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"}>
					Работа в MYX, като спец. обработка на данни
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"} textBelow>
					Завърших УАСГ, бакалавър архитектура, магистър Промишлени сгради
				</HistoryTimelineEvent>
				<HistoryTimelineEvent year={2016} icon={"school"}>
					Завърших проф. гимназия по строителство и архитектура
				</HistoryTimelineEvent>
			</ul>
		</section>
	);
}

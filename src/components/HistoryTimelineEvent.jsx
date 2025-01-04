export default function HistoryTimelineEvent({ icon, year, children, textBelow }) {
	return (
		<li className="grid grid-rows-3 items-center justify-items-center relative w-full h-[200px]">
			{/* ICON */}
			<span className={"flex flex-col text-theme-accent row-start-2 text-center "}>
				{year}
				<span
					className="material-symbols-rounded lg:text-3xl bg-theme-bg"
					style={{ fontVariationSettings: "'FILL' 1" }}>
					{icon}
				</span>
			</span>
			<p
				className={
					"line-clamp-3 bg-theme-window border-theme-text border-[1px] rounded-lg p-2 shadow-[2px_2px_4px_1px_rgba(0,0,0,0.2)] absolute text-center w-[280px] duration-1000" +
					(textBelow ? " row-start-3 -bottom-8" : " row-start-1 -top-5")
				}>
				{children}
			</p>
		</li>
	);
}

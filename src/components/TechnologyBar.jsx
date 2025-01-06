import { useEffect, useState } from "react";

export default function TechnologyBar({ icon, level, link }) {
	const [startingLevel, setStartingLevel] = useState(0);

	useEffect(() => {
		setStartingLevel(0); // Reset to 0 before starting the animation
		const timer = setTimeout(() => {
			setStartingLevel(level);
		}, 100); // Delay to ensure the reset takes effect

		return () => clearTimeout(timer); // Cleanup the timer
	}, [level]);

	return (
		<li className="flex gap-5 items-center">
			<a href={link}>
				<img
					src={icon}
					className="size-8 my-2 object-contain rounded hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-125 duration-200"
					alt=""
				/>
			</a>
			<div className="grid grid-cols-4 grid-rows-1 lg:h-full h-10 relative w-full items-center">
				<div className="size-full col-span-1 border-r-2 border-theme-muted border-dashed"></div>
				<div className="size-full col-span-1 border-r-2 border-theme-muted border-dashed"></div>
				<div className="size-full col-span-1 border-r-2 border-theme-muted border-dashed"></div>
				<div className="size-full col-span-1 border-theme-muted border-dashed"></div>
				<div className="col-span-full h-2 border-theme-text bg-none z-10 absolute w-full border-2 rounded overflow-hidden bg-theme-bg">
					<div
						className="bg-theme-accent h-full rounded-xl duration-[2s] "
						style={{ width: `${startingLevel}%` }}></div>
				</div>
			</div>
		</li>
	);
}

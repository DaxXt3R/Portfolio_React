export default function TechnologyBar({ icon, level, link }) {
	return (
		<li className="flex gap-5 items-center">
			<a href={link}>
				<img
					src={icon}
					className="size-8 object-contain rounded hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] hover:scale-125 duration-200"
					alt=""
				/>
			</a>
			<div className="w-full h-2 border-theme-text bg-none border-2 rounded overflow-hidden">
				<div className={"bg-theme-accent h-full rounded-xl duration-1000 " + `w-[${level}%]`}></div>
			</div>
		</li>
	);
}
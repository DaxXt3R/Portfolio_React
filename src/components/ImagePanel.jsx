import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { windowActions } from "../store/slices/window";

export default function ImagePanel({
	src,
	desc,
	className,
	openWindow,
	clickable = false,
	windowData = { heading: "", desc: "", github: "", images: [], button: "", link: "" },
}) {
	const [hovered, setHovered] = useState(false);
	const dispatch = useDispatch();
	function openWindow() {
		if (clickable) {
			dispatch(windowActions.open(windowData));
		}
	}

	return (
		<div
			onClick={openWindow}
			className={`${className} relative overflow-hidden flex-1 rounded-2xl border-2 border-theme-muted hover:border-theme-accent
        ${clickable && " cursor-pointer"} flex flex-col`}
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}>
			<img src={src} alt="" className="grayscale hover:grayscale-0 duration-500 object-cover size-full bg-theme-text" />
			<div
				id="label"
				className={
					"w-full bg-[rgba(0,0,0,50%)] text-white pointer-events-none font-medium absolute bottom-0 line-clamp-2 duration-200 text-center " +
					(hovered ? "h-14 p-1 " : "h-0 ")
				}>
				{desc}
			</div>
		</div>
	);
}

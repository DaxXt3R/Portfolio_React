import { useState } from "react";
import { useDispatch } from "react-redux";
import { windowActions } from "../store/slices/window";

export default function VideoPanel({
	src = "/imageDefault.jpg",
	desc,
	className,
	canMaximize = false,
}) {
	const [hovered, setHovered] = useState(false);
	const dispatch = useDispatch();
	function openWindow() {
		if (canMaximize) {
			dispatch(windowActions.openImage(src));
		}
	}

	return (
		<div
			onClick={openWindow}
			className={`${className} relative overflow-hidden flex-1  rounded-2xl border-2 border-theme-muted hover:border-theme-accent
        ${canMaximize && " cursor-pointer"} flex flex-col`}
			onMouseEnter={() => {
				setHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
			}}>
			<video
				src={src}
				alt=""
				autoPlay
				muted loop
				className="grayscale hover:grayscale-0 duration-500 object-cover size-full bg-theme-text"
			/>
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

import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { windowActions } from "../store/slices/window";

export default function MaximizeImage() {
	const img = useSelector((state) => state.window.MaximizeImage);
	const isMaximized = useSelector((state) => state.window.isMaximized);
	const dispatch = useDispatch();

	return (
		isMaximized && (
			<div
				className="absolute bg-black opacity-50"
				id="maximizedImageBackdrop"
				onClick={() => {
					dispatch(windowActions.closeImage());
				}}>
				<img src={img} alt="" className="size-4/5" />
			</div>
		)
	);
}

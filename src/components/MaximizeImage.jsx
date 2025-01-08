import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "motion/react";
import { useDispatch } from "react-redux";
import { windowActions } from "../store/slices/window";
import { useState } from "react";

export default function MaximizeImage() {
	const img = useSelector((state) => state.window.maximizedImage);
	const isMaximized = useSelector((state) => state.window.isMaximized);
	const dispatch = useDispatch();
	const [imageZoom, setImageZoom] = useState(1);

	function handleImageZoom(e) {
		if (e.deltaY > 0) {
			setImageZoom(imageZoom - 0.1);
		} else {
			setImageZoom(imageZoom + 0.1);
		}
	}
	function closeImage() {
		dispatch(windowActions.closeImage());
		setImageZoom(1);
	}

	return (
		<AnimatePresence>
			{isMaximized && (
				<div className="fixed inset-0 flex justify-center items-center z-20">
					<motion.div
						className="fixed bg-[rgba(0,0,0,0.75)] inset-0 size-full z-20 "
						id="maximizedImageBackdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={closeImage}></motion.div>
					<motion.img
						src={img}
						className="max-h-[80%] max-w-[80%] z-30 m-auto absolute"
						initial={{ scale: 0.1 }}
						animate={{ scale: imageZoom }}
						exit={{ opacity: 0, y: -200 }}
						drag
						dragMomentum={false}
						onWheel={handleImageZoom}
					/>
				</div>
			)}
		</AnimatePresence>
	);
}

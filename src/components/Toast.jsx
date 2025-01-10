import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Toast({ message = "", duration = 3, type }) {
	const [isVisible, setIsVisible] = useState(true);

	const title = (() => {
		switch (type) {
			case "success":
				return "Success";
			case "error":
				return "Error";
			default:
				return "Message";
		}
	})(); /* declare the func and immediatley execute it */

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, duration * 1000);

		return ()=>{clearTimeout(timer)} /* cleanup func */
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="lg:w-[300px]"
					initial={{ x: "100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ y: -100, opacity: 0 }}>
					<label>{title}</label>
					<span>{message}</span>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

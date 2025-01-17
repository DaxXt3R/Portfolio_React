import { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonToPage from "./ButtonToPage";
import { useDispatch, useSelector } from "react-redux";
import { windowActions } from "../store/slices/window";
import { motion } from "motion/react";
import Icon from "./Icon";
import { AnimatePresence } from "motion/react";

const DashedLine = styled.hr`
	border-style: dashed;
	border-radius: 8px;
	width: 50%;
`;

export default function ModalWindow() {
	// -------------------LOAD DATA FROM STORE-------------------
	const dispatch = useDispatch();
	const heading = useSelector((state) => state.window.heading);
	const description = useSelector((state) => state.window.description);
	const lang = useSelector((state) => state.theme.lang);
	const button = useSelector((state) => state.window.button);
	const github = useSelector((state) => state.window.github);
	const images = useSelector((state) => state.window.images);
	const windowOpen = useSelector((state) => state.window.isOpen);
	const link = useSelector((state) => state.window.link);

	// -------------------DRAGGING LOGIC-------------------
	// const [position, setPosition] = useState({ x: window.innerWidth/6, y: window.innerHeight/4 });
	const [position, setPosition] = useState({
		x: (window.innerWidth - 1060) / 2,
		y: (window.innerHeight - 600) / 2,
	});

	const [mainImage, setMainImage] = useState(images[0]);

	const loadMainImage = useEffect(() => {
		setMainImage(images[0]);
	}, [images]);

	// ----------------------------------------------------
	return (
		<AnimatePresence>
			{windowOpen && (
				<motion.div
					initial={{ scale: 0.1 }}
					animate={{ scale: 1 }}
					exit={{ opacity: 0, y: -200, transition: { duration: 0.1 } }}
					id="ModalWindow"
					className={
						"rounded-2xl absolute bg-theme-window transition-colors duration-700 p-8 lg:px-16 lg:py-12  z-10 gap-1 flex flex-col max-w-[1060px] drop-shadow-[4px_4px_6px_rgba(0,0,0,50%)] "
					}
					style={{ top: `${position.y}px`, left: `${position.x}px` }} //? this shit doesnt work with tailwind for some reason
					// onMouseDown={mouseDownHandler} onMouseMove={mouseMoveHandler} onMouseUp={mouseUpHandler}
				>
					<button
						onClick={() => {
							dispatch(windowActions.close());
						}}
						className="material-symbols-rounded text-[40px] absolute right-6 top-4 text-theme-text hover:text-theme-accent duration-200 p-0 size-7">
						disabled_by_default
					</button>
					<h5 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1">{heading}</h5>
					<hr className="decoration-2 border-[1px] border-theme-muted border-dashed duration-700" />
					<div className="flex flex-col lg:flex-row lg:gap-6 gap-3 lg:pt-8 pt-2 h-full">
						<div className=" lg:w-1/2 flex-col flex gap-2">
							<div className="relative flex-1 min-h-[300px] overflow-hidden rounded-lg bg-theme-muted border-2 border-theme-text">
								<img
									src={mainImage}
									className="absolute top-1/2 left-1/2 w-full h-full object-contain transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
									onClick={() => {
										dispatch(windowActions.openImage(mainImage));
									}}
								/>
							</div>
							<ul className="flex flex-row gap-2 overflow-x-scroll ">
								{images.map((path, index) => {
									return (
										<img
											src={path}
											className="h-14 object-contain bg-theme-muted rounded-lg border-[1px] border-theme-text grayscale cursor-pointer hover:border-theme-accent hover:grayscale-0 duration-500"
											key={index}
											onClick={() => {
												setMainImage(path);
											}}
										/>
									);
								})}
							</ul>
						</div>
						<div className="flex-1 flex flex-col justify-between">
							<p className="text-theme-text text-justify duration-700">{description[lang]}</p>
							<div className="flex justify-between ">
								<Icon
									className="size-8"
									href={github}
									path="M10.0343 24.156C10.0343 24.28 9.89516 24.3793 9.71976 24.3793C9.52016 24.3979 9.38105 24.2986 9.38105 24.156C9.38105 24.0319 9.52016 23.9326 9.69556 23.9326C9.87702 23.914 10.0343 24.0133 10.0343 24.156ZM8.15323 23.8768C8.11089 24.0009 8.23186 24.1435 8.41331 24.1808C8.57056 24.2428 8.75202 24.1808 8.78831 24.0567C8.8246 23.9326 8.70968 23.79 8.52823 23.7341C8.37097 23.6907 8.19556 23.7527 8.15323 23.8768ZM10.8266 23.7713C10.6512 23.8148 10.5302 23.9326 10.5484 24.0753C10.5665 24.1994 10.7238 24.28 10.9052 24.2366C11.0806 24.1932 11.2016 24.0753 11.1835 23.9512C11.1653 23.8334 11.002 23.7527 10.8266 23.7713ZM14.8065 0C6.41734 0 0 6.53216 0 15.1362C0 22.0158 4.22177 27.9028 10.252 29.9747C11.0262 30.1174 11.2984 29.6273 11.2984 29.2241C11.2984 28.8395 11.2802 26.718 11.2802 25.4152C11.2802 25.4152 7.04637 26.3457 6.15726 23.5666C6.15726 23.5666 5.46774 21.7614 4.47581 21.2962C4.47581 21.2962 3.09073 20.3223 4.57258 20.3409C4.57258 20.3409 6.07863 20.4649 6.90726 21.9414C8.23185 24.3359 10.4516 23.6473 11.3165 23.2379C11.4556 22.2453 11.8488 21.5567 12.2843 21.1473C8.90323 20.7627 5.49194 20.2602 5.49194 14.2926C5.49194 12.5867 5.95161 11.7306 6.91935 10.6388C6.7621 10.2356 6.24798 8.57307 7.07661 6.4267C8.34073 6.02348 11.25 8.10161 11.25 8.10161C12.4597 7.75422 13.7601 7.57433 15.0484 7.57433C16.3367 7.57433 17.6371 7.75422 18.8468 8.10161C18.8468 8.10161 21.756 6.01728 23.0202 6.4267C23.8488 8.57927 23.3347 10.2356 23.1774 10.6388C24.1452 11.7368 24.7379 12.5929 24.7379 14.2926C24.7379 20.2788 21.1754 20.7565 17.7944 21.1473C18.3508 21.6374 18.8226 22.5679 18.8226 24.0257C18.8226 26.1162 18.8044 28.703 18.8044 29.2117C18.8044 29.6149 19.0827 30.105 19.8508 29.9623C25.8992 27.9028 30 22.0158 30 15.1362C30 6.53216 23.1956 0 14.8065 0ZM5.87903 21.3955C5.8004 21.4575 5.81855 21.6002 5.92137 21.718C6.01815 21.8173 6.15726 21.8607 6.23589 21.7801C6.31452 21.718 6.29637 21.5753 6.19355 21.4575C6.09677 21.3582 5.95766 21.3148 5.87903 21.3955ZM5.22581 20.893C5.18347 20.9736 5.24395 21.0729 5.36492 21.1349C5.46169 21.1969 5.58266 21.1783 5.625 21.0915C5.66734 21.0108 5.60685 20.9116 5.48589 20.8496C5.36492 20.8123 5.26815 20.8309 5.22581 20.893ZM7.18548 23.1014C7.08871 23.182 7.125 23.3681 7.26411 23.486C7.40323 23.6287 7.57863 23.6473 7.65726 23.548C7.73589 23.4674 7.6996 23.2813 7.57863 23.1634C7.44556 23.0207 7.26411 23.0021 7.18548 23.1014ZM6.49597 22.1895C6.39919 22.2515 6.39919 22.4128 6.49597 22.5555C6.59274 22.6982 6.75605 22.7602 6.83468 22.6982C6.93145 22.6175 6.93145 22.4562 6.83468 22.3136C6.75 22.1709 6.59274 22.1088 6.49597 22.1895Z"
								/>
								<ButtonToPage href={link}>{button}</ButtonToPage>
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

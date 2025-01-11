import SocialLinks from "../components/SocialLinks";
import ButtonToPage from "../components/ButtonToPage";
import ImagePanel from "../components/ImagePanel";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { motion } from "motion/react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useSwipeable } from "react-swipeable";

export default function HomePage() {
	const lang = useSelector((state) => state.theme.lang);
	const navigate = useNavigate();
	const isMaximized = useSelector((state) => state.window.isMaximized);



	const handleSwipes = useSwipeable({
		onSwipedUp: () => {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (isAtBottom) {
				navigate("/skills");
				window.scrollTo({ top: 0 });
			}
		},
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});



	useEffect(() => {
		function handleScroll(event) {
			if (isMaximized) return; //disable scrolling if currently viewing a image fullscreen
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (event.deltaY > 0 && isAtBottom) {
				navigate("/skills");
				window.scrollTo({ top: 0 });
			}
		}
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);

		
	}, [navigate]);

	const [typeWriter] = useTypewriter({
		words: [
			[
				"Fullstack applications.",
				"Custom websites.",
				"React UI components.",
				"Mobile games.",
				"Back-end solutions.",
			],
			[
				"Fullstack приложения.",
				"Поръчкови уебсайтове.",
				"React UI компоненти.",
				"Мобилни видео игри.",
				"Back-end решения.",
			]
		][lang],
		loop: false,
		delaySpeed: 3000,
		typeSpeed:100,
		deleteSpeed:40
	});

	return (
		<main className="px-4 my-auto " {...handleSwipes}>
			<motion.section
				className="flex flex-col lg:flex-row text-theme-text max-w-[1170px] mx-auto mt-8"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				<div className="flex flex-col justify-between ">
					<motion.div
						className="flex flex-col gap-2 w-full"
						initial={{ opacity: 0, y: "5vh" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.25 }}>
						<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1">
							{["Hello, my name is", "Здравейте, аз съм"][lang]}
						</h1>
						<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1">
							{["Diyan and I develop", "Диян и програмирам"][lang]}
						</h1>
						<h3 className="text-theme-accent text-3xl lg:text-6xl font-bold animateH1">
							{typeWriter}
							<Cursor cursorColor="red" />
						</h3>
						<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold animateH1">
							{["For you.", "За вас."][lang]}
						</h1>
					</motion.div>
					<SocialLinks className="hidden lg:flex"></SocialLinks>
				</div>

				<img
					src="/red-dayCOVER 1.png"
					alt=""
					className="object-contain h-[430px] lg:h-[530px] mr-4 lg:ml-auto drop-shadow-1 mt-10 lg:mt-0"
				/>

				<hr className="border-2 rounded border-theme-muted lg:hidden" />
				<SocialLinks className="lg:hidden"></SocialLinks>
			</motion.section>
			<motion.hr
				className="border-2 rounded border-theme-muted max-w-[1170px] mx-auto"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			/>

			<motion.section
				className="flex flex-col lg:flex-row gap-4 py-4 w-full lg:justify-between max-w-[1170px] lg:max-h-[244px] mx-auto"
				initial={{ opacity: 0, y: "5vh" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.75 }}>
				<h2 className="font-bold text-xl text-theme-bold lg:hidden">Това са личните ми проекти</h2>

				<ImagePanel
					src={"/projects/nuchan panel.png"}
					className={"lg:w-[340px] mx-4 lg:mx-0"}
					clickable
					// desc={"NUchan е козметичен ъпдейт на 4chan.org с добавени функции"}
					desc={
						[
							"NUchan is a cosmetic visual update to 4chan.org with added features",
							"NUchan е козметичен ъпдейт на 4chan.org с добавени функции",
						][lang]
					}
					windowData={{
						heading: "NUchan",
						description: [
							"NUchan is a graphical redesign of 4chan.org that adds a  lot of exciting new features. This is a passion project of mine since I like the unfiltered weird community of 4chan but I hate the early 2000s UI. So when I started learning web-development there was no better first project to choose than remaking 4chan. The front end is built with HTML, JavaScript, tailwind and some DaisyUI components. It uses a templating engine EJS, where I made pseudo-components like the sideNav, topNav, post, postReply etc. I used express for the back-end and   currently the site gets populated by 4chan’s API and it is  read-only. In the future I will be implementing personal profiles, board archives, the ability to add new posts as well as copying those posts over to 4chan.",
							"NUchan е графичен редизайн на 4chan.org и добавя много нови готини функции. Винаги съм харесвал безцензурираната и екстремна общност на 4chan, но ужасния интерфейс от 2004 г. дереше на очите ми. Тъй че като започнах да уча уеб-дизайн, най-готината ми идея на времето бе преправянето на 4chan. За Front-end използвах HTML, JavaScript, Tailwind и някои DaisyUI компоненти където ме мързеше да направя по мярка. Използвах HTML шаблони с EJS, и създадох псевдокомпоненти като sideNav, topNav, post, postReply и т.н. Сървъра върви на еxpress и в момента сайтът се попълва от API-я на 4chan и е read-only. В бъдеще ще добавя лични профили, архиви на бордовете, възможност за създаване на нови постове и пренасочването им към 4chan.org",
						],
						button: "nuchan.net",
						github: "https://github.com/DaxXt3R/NUchan",
						images: [
							"/projects/nuchan panel.png",
							"/projects/nuchan catalogue.png",
							"/projects/nuchan post theming.jpg",
							"/projects/nuchan Themes.jpg",
							"/projects/nuchan posts prototyping.png",
							"/projects/nuchan fullscreen.jpg",
							"/projects/nuchan code 1.jpg",
							"/projects/nuchan code 2.jpg",
						],
					}}></ImagePanel>
				<ImagePanel className={"lg:w-[340px] mx-4 lg:mx-0"}></ImagePanel>

				<div className="flex-col flex lg:w-[470px]">
					<h2 className="theme-h2 hidden lg:block">
						{["These are my personal projects.", "Това са личните ми проекти."][lang]}
					</h2>
					<p className="theme-p">
						{
							[
								"They're not many, because right now I'm focusing on quality over quantity. I'm orienting myself toward Full-Stack development because I want to be able to build applications from bottom to top and understand every step of the production process. This list will steadily grow, but If you like what you see so far I'd be happy to work with you!",
								"Не са много на брой, защото се концентрирам в/у качество вместо количество. Ориентирвам се около разработването на Full-Stack приложения, защото искам да разбирам цялостния процес от-до. Списъкът постепенно ще расте във времето, но ако харесвате това което виждате за сега ще се радвам да работим заедно!",
							][lang]
						}
					</p>

					<ButtonToPage href="/skills/projects">{["PROJECTS", "ПРОЕКТИ"][lang]}</ButtonToPage>
				</div>
			</motion.section>
		</main>
	);
}

import { useSelector } from "react-redux";
import ImagePanel from "../components/ImagePanel";
import { motion } from "motion/react";

export default function ProjectsPage() {
	const lang = useSelector((state) => state.theme.lang);

	// animations
	const imagePanelFadeIn = {
		initial: { x: 200, opacity: 0 },
		animate: { x: 0, opacity: 1 },
	};

	return (
		<main className="px-4 flex flex-col text-theme-text gap-8 items-center max-w-[1170px] m-auto py-4">
			<motion.h1
				initial={{ x: "20vw", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, type: "spring" }}
				className="theme-h1 w-full">
				{["Personal projects", "Лични проекти"][lang]}
			</motion.h1>
			<section>
				<motion.div
					//? yeah this is not organized AT ALL, I cba
					variants={imagePanelFadeIn}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.5, delay: 0.25, type: "spring" }}
					className="lg:h-[400px] lg:px-20 flex flex-col h-[1200px] overflow-hidden lg:grid lg:grid-cols-3 gap-2 lg:grid-rows-2">
					<ImagePanel
						src={"/nuchan panel.png"}
						clickable
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
						}}
					/>
					<ImagePanel
						src={"/projects/portfolio_1.jpg"}
						clickable
						// desc={"NUchan е козметичен ъпдейт на 4chan.org с добавени функции"}
						desc={
							[
								"This SPA static website made with React!",
								"Този SPA статичен уебсайт направен с React!",
							][lang]
						}
						windowData={{
							heading: "Portfolio",
							description: [
								"NUchan is a graphical redesign of 4chan.org that adds a  lot of exciting new features. This is a passion project of mine since I like the unfiltered weird community of 4chan but I hate the early 2000s UI. So when I started learning web-development there was no better first project to choose than remaking 4chan. The front end is built with HTML, JavaScript, tailwind and some DaisyUI components. It uses a templating engine EJS, where I made pseudo-components like the sideNav, topNav, post, postReply etc. I used express for the back-end and   currently the site gets populated by 4chan’s API and it is  read-only. In the future I will be implementing personal profiles, board archives, the ability to add new posts as well as copying those posts over to 4chan.",
								"Този сайт е Single-Page-Application направен с React, React Router, Redux, Tailwind и Motion. Първият ми проект е с тези технологии, затова изглежда малко аматьорски, но показва упоритостта и уменията ми като Front end и UI/UX дизайнер. Гордея се с него и ще добавям повече проекти илюстриращи колко полезен мога да бъда за вашия екип. Ако ви харесва и желаете обработка на ваш собствен сайт, свържете се с мен по-долу, ще се радвам да работим заедно!",
							],
							button: "dido-nikolov.web.app",
							link: "https://dido-nikolov.web.app/",
							github: "https://github.com/DaxXt3R/Portfolio_React",
							images: [
								"/projects/portfolio_1.jpg",
								"/projects/portfolio_2.jpg",
								"/projects/portfolio_3.jpg",
								"/projects/portfolio_4.jpg",
							],
						}}></ImagePanel>
					<ImagePanel />
					<ImagePanel />
					<ImagePanel />
					<ImagePanel />
				</motion.div>
			</section>
		</main>
	);
}

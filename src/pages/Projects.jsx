import { useSelector } from "react-redux";
import { Link } from "react-router";
import ImagePanel from "../components/ImagePanel";

export default function ProjectsPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] m-auto">
			<section>
				<h1 className="theme-h1">Personal projects</h1>
				<div>
					<ImagePanel
						src={"/nuchan panel.png"}
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
						}}/>
				</div>
			</section>
		</main>
	);
}

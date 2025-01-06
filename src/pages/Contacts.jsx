import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';

export default function ContactsPage() {
	const lang = useSelector((state) => state.theme.lang);
	const navigate = useNavigate();

	const [formMessage, setFormMessage] = useState("");
	const [formFrom, setFormFrom] = useState("");
	const [formEmail, setFormEmail] = useState("");

	useEffect(() => {
		function handleScroll(event) {
			const isAtTop = window.scrollY == 0;

			if (event.deltaY < 0 && isAtTop) {
				/* scroll up */
				navigate("/aboutMe");
			}
		}
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);
	}, [navigate]);

	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] m-auto gap-6">
			<h1 className="theme-h1 text-center lg:text-left">
				{["Let's work together!", "Нека работим заедно!"][lang]}
			</h1>
			<section className="flex flex-col justify-between w-full max-w-[700px]">
				<p className="flex items-baseline gap-2">
					<h3 className="font-bold">E-mail: </h3>
					<span>deennikolov@gmail.com</span>
				</p>
				<p className="flex items-baseline gap-2">
					<h3 className="font-bold">{["Mobile:", "Тел:"][lang]}</h3>
					<span>0882 333 541</span>
				</p>
			</section>
			<form action="" className="max-w-[700px] grid grid-cols-2 gap-4 w-full">
				<h3 className="col-span-2">
					{
						[
							"Send an inquiry with the form below and I'll be happy to hear from you and schedule a meeting at a comfortable time.",
							"Пратете запитване чрез долния формуляр и ще се радвам да Ви чуя и да уговорим удобна за Вас среща, очакваме ви!",
						][lang]
					}
				</h3>
				<label
					htmlFor=""
					className="input input-bordered flex items-center gap-2 bg-transparent p-2 border-theme-text col-span-2 lg:col-span-1">
					{["From:", "Подател:"][lang]}
					<input type="text" className="grow" />
				</label>
				<label
					htmlFor=""
					className="input input-bordered border-theme-text flex items-center gap-2 bg-transparent p-2 col-span-2 lg:col-span-1">
					E-mail:
					<input type="text" className="grow" />
				</label>
				<textarea
					className="textarea bg-transparent border-[1px] border-theme-text max-h-[500px] col-span-2 text-base h-[200px] p-2"
					placeholder={["Message", "Съобщение:"][lang]}></textarea>
				<button className="font-medium bg-theme-window rounded-lg h-10 btn border-none text-theme-text hover:bg-theme-accent hover:text-white text-lg col-start-2 w-fit justify-self-end px-10">
					SEND
				</button>
			</form>
		</main>
	);
}

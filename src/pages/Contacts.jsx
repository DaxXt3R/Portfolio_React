import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { animate } from "motion";

export default function ContactsPage() {
	const lang = useSelector((state) => state.theme.lang);
	const navigate = useNavigate();

	const [formMessage, setFormMessage] = useState(localStorage.getItem("formMessage"));
	const [formFrom, setFormFrom] = useState(localStorage.getItem("formFrom"));
	const [formEmail, setFormEmail] = useState(localStorage.getItem("formEmail"));

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

	const persistFormData = useEffect(() => {
		localStorage.setItem("formMessage", formMessage);
		localStorage.setItem("formFrom", formFrom);
		localStorage.setItem("formEmail", formEmail);
	}, [formMessage, formEmail, formFrom]);

	function sendEmail(event) {
		event.preventDefault();
		setFormEmail("");
		setFormFrom("");
		setFormMessage("");
		console.log("Sending E-mail...");
	}

	const enterDefault = {
		initial: { opacity: 0, y: "5vh" },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] m-auto gap-6">
			<motion.h1
				className="theme-h1 text-center lg:text-left"
				variants={enterDefault}
				initial={"initial"}
				animate={"animate"}
				transition={"transition"}>
				{["Let's work together!", "Нека работим заедно!"][lang]}
			</motion.h1>
			<motion.section
				className="flex flex-col justify-between w-full max-w-[700px]"
				variants={enterDefault}
				initial={"initial"}
				animate="animate"
				transition={{ duration: 0.5, delay: 0.25 }}>
				<p className="flex items-baseline gap-2">
					<label className="font-bold">E-mail:</label>
					<span>deennikolov@gmail.com</span>
				</p>
				<p className="flex items-baseline gap-2">
					<label className="font-bold">{["Mobile:", "Тел:"][lang]}</label>
					<span>0882 333 541</span>
				</p>
			</motion.section>

			<motion.form
				action=""
				className="max-w-[700px] grid grid-cols-2 gap-4 w-full"
				onSubmit={sendEmail}
				variants={enterDefault}
				initial={"initial"}
				animate="animate"
				transition={{ duration: 0.5, delay: 0.5 }}>
				<h3 className="col-span-2">
					{
						[
							"Send an inquiry with the form below and I'll be happy to hear from you and schedule a meeting at a comfortable time.",
							"Пратете запитване чрез долния формуляр и ще се радвам да Ви чуя и да уговорим удобна за Вас среща, очакваме ви!",
						][lang]
					}
				</h3>
				<label
					htmlFor="formMessage"
					className="input input-bordered flex items-center gap-2 bg-transparent p-2 border-theme-text col-span-2 lg:col-span-1">
					{["From:", "Подател:"][lang]}
					<input
						id="formMessage"
						type="text"
						className="grow"
						value={formFrom}
						onChange={(e) => {
							setFormFrom(e.target.value);
						}}
					/>
				</label>
				<label
					htmlFor="formEmail"
					className="input input-bordered border-theme-text flex items-center gap-2 bg-transparent p-2 col-span-2 lg:col-span-1">
					E-mail:
					<input
						id="formEmail"
						type="text"
						className="grow"
						value={formEmail}
						onChange={(e) => {
							setFormEmail(e.target.value);
						}}
					/>
				</label>
				<textarea
					onChange={(e) => {
						setFormMessage(e.target.value);
					}}
					className="textarea bg-transparent border-[1px] border-theme-text max-h-[500px] col-span-2 text-base h-[200px] p-2"
					placeholder={["Message", "Съобщение:"][lang]}
					value={formMessage}></textarea>
				<button className="font-medium bg-theme-window rounded-lg h-10 btn border-none text-theme-text hover:bg-theme-accent hover:text-white text-lg col-start-2 w-fit justify-self-end px-10">
					SEND
				</button>
			</motion.form>
		</main>
	);
}

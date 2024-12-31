import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function ContactsPage() {
	const lang = useSelector((state) => state.theme.lang);

	const navigate = useNavigate();

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
		<main className="px-4 flex flex-col text-theme-text mt-8 items-center max-w-[1170px]">
			<h1 className="theme-h1 w-full">{["Let's work together!", "Нека работим заедно!"][lang]}</h1>
			<h3>
				{
					[
						"Send an E-mail with the form below and I'll be happy to schedule a meeting for you at an appropriate time.",
						"Пратете E-mail чрез долния формуляр и ще се радвам да уговорим среща в удобно време, очакваме ви!",
					][lang]
				}
			</h3>
			<form></form>
		</main>
	);
}

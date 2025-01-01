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
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] m-auto">
			<h1 className="theme-h1 w-max">{["Let's work together!", "Нека работим заедно!"][lang]}</h1>
			<form action="" className="max-w-[700px] grid grid-cols-2 gap-4">
				<h3 className="col-span-2">
					{
						[
							"Send an E-mail with the form below and I'll be happy to schedule a meeting for you at an appropriate time.",
							"Пратете E-mail чрез долния формуляр и ще се радвам да уговорим среща в удобно време, очакваме ви!",
						][lang]
					}
				</h3>
				<label htmlFor="" className="input input-bordered flex items-center gap-2 bg-transparent p-2 border-theme-text">
				From:
					<input type="text" className="grow"/>
				</label>
				<label htmlFor="" className="input input-bordered border-theme-text flex items-center gap-2 bg-transparent p-2">
					E-mail:
					<input type="text" className="grow" />
				</label>
				<label htmlFor="" className="input input-bordered flex items-center gap-2 bg-transparent border-theme-text p-2 col-span-2 min-h-[200px]  ">
					Message:
					<input type="text" className="grow size-full" />
				</label>
				<button className="font-medium bg-theme-window rounded-lg h-10 btn border-none text-theme-text hover:bg-theme-accent hover:text-white text-lg col-start-2 w-fit justify-self-end px-10">SEND</button>
			</form>
		</main>
	);
}

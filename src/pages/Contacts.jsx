import { useSelector } from "react-redux";

export default function ContactsPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 flex flex-col text-theme-text mt-8 items-center max-w-[1170px]">
			<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6 animateH1 w-full">
				{["Let's work together!", "Нека работим заедно!"][lang]}
			</h1>
			<h3>
				{[
					"Send an E-mail with the form below and I'll be happy to schedule a meeting for you at an appropriate time.",
					"Пратете E-mail чрез долния формуляр и ще се радвам да уговорим среща в удобно време, очакваме ви!",
				][lang]}
			</h3>
			<form>

			</form>
		</main>
	);
}

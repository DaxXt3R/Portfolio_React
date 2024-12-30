import MainWrapper from "../components/MainWrapper";
import { useSelector } from "react-redux";

export default function NotFoundPage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<MainWrapper>
			<div className="flex flex-col gap-4 justify-center size-full items-center max-w-[1170px] m-auto p-4">
				<div className="">
					<img src="/notFound.gif" alt="" className="pl-2" />
					<hr className="border-theme-text border-[1.5px] rounded" />
				</div>
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold text-center px-4">
					{["Oops that page doesn't exist", "Опа! Стана грешка, тази страница не съществува!"][lang]}
				</h1>
				<h2 className="font-bold text-xl text-theme-muted">
					{["Please go back, and try again.", "Моля върнете се назад и пробвайте пак."][lang]}
				</h2>
			</div>
		</MainWrapper>
	);
}

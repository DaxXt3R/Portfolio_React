import ThemeToggler from "./ThemeToggler";
import { themeActions } from "../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

export default function TopNav() {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.theme.lang);
	console.log(lang);
	const theme = useSelector((state) => state.theme.value);

	function changeLang() {
		dispatch(themeActions.toggleLang());
	}

	return (
		<nav
			className={"h-20 w-full sticky top-0 z-20" + ` bg-${theme}`}
			style={{ maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)" }}>
			<div className="max-w-[1408px] flex justify-between items-center text-theme-muted  mx-auto px-4 pt-2">
				<Link to="/" className="material-symbols-rounded col-start-1 row-start-1 text-3xl w-[88px]">
					home
				</Link>

				<ThemeToggler></ThemeToggler>
				<div>
					<button className="font-bold mr-7 text-xl align-middle" onClick={changeLang}>
						{lang === 0 ? "EN" : "BG"}
					</button>
					<button className="material-symbols-rounded align-middle text-3xl">menu</button>
				</div>
			</div>
		</nav>
	);
}

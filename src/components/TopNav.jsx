import ThemeToggler from "./ThemeToggler";
import { themeActions } from "../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import styled from "styled-components";

const NavStyled = styled.nav`
	background: var(--gradient);
	mask-image: linear-gradient(to bottom, white 60%, transparent 100%);
`;

export default function TopNav() {
	const dispatch = useDispatch();
	const lang = useSelector((state) => state.theme.lang);

	function changeLang() {
		dispatch(themeActions.toggleLang());
	}

	return (
		<NavStyled className={"h-20 w-full sticky top-0 z-20"}>
			<div className="max-w-[1408px] flex justify-between items-center text-theme-muted  mx-auto px-4 pt-2">
				<Link to="/" className="col-start-1 row-start-1 w-[88px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 40.09 21.86"
						className="h-7 stroke-theme-muted stroke-[1.75px]">
						<g>
							<path
								className=""
								d="m6.67.75l-3.48,18.66L.75,14.02l10.38,5.5L14.6.75,2.39,4.25h13.32l3.42-3.5-1.18,7.16L22.96.75l-1.18,7.19L29.94.75h-4.95l5.73,7.15,1.22-7.15m3.83,0l-1.93,11.34m-1.92-7.6l7.43.08L10.03,21.05m8.05.07l20.44-11.62m-13.03,11.62l12.27-7.09m-5.35,7.02l4.55-2.44"
								style={{
									fill: "none",
									strokeLinecap: "round",
									strokeLinejoin: "round",
								}}
							/>
						</g>
					</svg>
				</Link>

				<ThemeToggler />
				<div>
					<button className="font-bold mr-7 text-xl align-middle" onClick={changeLang}>
						{lang == 0 ? "EN" : "BG"}
					</button>
					<button className="material-symbols-rounded align-middle text-3xl">menu</button>
				</div>
			</div>
		</NavStyled>
	);
}

import { useEffect } from "react";
import { themeActions } from "../store/slices/theme.js"; /* this imports all of the functions used to change the states in the slice store */
import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggler(props) {
	const dispatch = useDispatch(); /* Hooks have to be called at the top level */
	const currentTheme = useSelector((state) => state.theme.value);
	function toggleRedux() {
		dispatch(themeActions.toggle());
	}

	return (
		<label className={"grid cursor-pointer place-items-center"}>
			<input
				type="checkbox"
				value="light"
				onClick={toggleRedux}
				checked={currentTheme === "dark"}
				readOnly
				className="toggle col-span-2 col-start-1 border-0 row-start-1 bg-theme-bg hover:bg-inherit [--tglbg:var(--muted)] "
			/>
			<span className="material-symbols-rounded col-start-1 row-start-1 text-lg text-theme-muted">
				brightness_low
			</span>
			<span className="material-symbols-rounded col-start-2 row-start-1 text-lg ">dark_mode</span>
		</label>
	);
}

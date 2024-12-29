import { useSelector } from "react-redux";
import { Link } from "react-router";
export default function AboutMepage() {
	const lang = useSelector((state) => state.theme.lang);

	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] my-auto">
			<h1 className="theme-h1">За мен</h1>
				<Link to="biography" >Bio Page</Link>
		</main>
	);
}

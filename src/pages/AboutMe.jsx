import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function AboutMepage() {
	const lang = useSelector((state) => state.theme.lang);

	const navigate = useNavigate();

	useEffect(() => {
		function handleScroll(event) {
			const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			const isAtTop = window.scrollY == 0;

			if (event.deltaY > 0 && isAtBottom) {	/* scroll down */
				navigate("/contacts");
			}
			if (event.deltaY < 0 && isAtTop) { /* scroll up */
				navigate("/skills");
			}
		}
		window.addEventListener("wheel", handleScroll);
		return () => window.removeEventListener("wheel", handleScroll);
	}, [navigate]);


	return (
		<main className="px-4 flex flex-col text-theme-text items-center max-w-[1170px] my-auto">
			<h1 className="theme-h1">За мен</h1>
				<Link to="biography" >Bio Page</Link>
		</main>
	);
}

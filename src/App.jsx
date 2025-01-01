import { createBrowserRouter, RouterProvider, useLocation, useNavigate } from "react-router";
import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage.jsx";
import LeftPageNav from "./components/LeftPageNav.jsx";
import SkillsPage from "./pages/Skills.jsx";
import NotFoundPage from "./pages/NotFound.jsx";
import RootPage from "./pages/Root.jsx";
import ContactsPage from "./pages/Contacts.jsx";
import AboutMepage from "./pages/AboutMe.jsx";
import BiographyPage from "./pages/Biography.jsx";
import ProjectsPage from "./pages/Projects.jsx";

export default function App() {
	const lang = useSelector((state) => state.theme.lang);
	useEffect(() => {
		function animateH1Text() {
			const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

			document.querySelectorAll("h1, h2, h4").forEach((element) => {
				const originalText = element.innerText;

				let iterations = 0;
				const interval = setInterval(() => {
					const splitText = element.innerText.split("");
					const randomizedText = splitText
						.map((letter, index) => {
							if (index < iterations) {
								return originalText[index];
							}
							return letters[Math.floor(Math.random() * letters.length)];
						})
						.join("");
					element.innerText = randomizedText;
					if (iterations >= originalText.length) {
						clearInterval(interval);
					}
					iterations+=1/3;
				}, 15);
			});
		}
		animateH1Text();
	}, [lang]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<RootPage></RootPage>
				</>
			),
			errorElement: <NotFoundPage />,
			children: [
				{
					path: "",
					element: (
						<>
							<HomePage></HomePage>
							<LeftPageNav></LeftPageNav>
						</>
					),
				},
				{
					path: "/skills",
					element: (
						<>
							<SkillsPage></SkillsPage>
							<LeftPageNav></LeftPageNav>
						</>
					),
				},
				{
					path: "/skills/projects",
					element: (
						<>
							<ProjectsPage></ProjectsPage>
						</>
					),
				},
				{
					path: "/contacts",
					element: (
						<>
							<ContactsPage></ContactsPage>
							<LeftPageNav></LeftPageNav>
						</>
					),
				},
				{
					path: "/aboutMe",
					element: (
						<>
							<AboutMepage></AboutMepage>
							<LeftPageNav></LeftPageNav>
						</>
					),
				},
				{
					path: "/aboutMe/biography",
					element: (
						<>
							<BiographyPage></BiographyPage>
						</>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

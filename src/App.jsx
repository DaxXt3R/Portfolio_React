import { createBrowserRouter, RouterProvider, useLocation, useNavigate } from "react-router";
import "./App.css";

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

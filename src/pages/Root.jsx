import MainWrapper from "../components/MainWrapper.jsx";
import TopNav from "../components/TopNav.jsx";
import ModalWindow from "../components/ModalWindow.jsx"	

import { Outlet } from "react-router";
import { useSelector } from "react-redux";

export default function RootPage() {
	const windowOpen = useSelector((state) => state.window.isOpen);

	return (
		<>
			<MainWrapper>
				<TopNav></TopNav>
				{windowOpen && <ModalWindow></ModalWindow>}
				<Outlet></Outlet>
			</MainWrapper>
		</>
	);
}

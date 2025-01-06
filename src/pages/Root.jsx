import MainWrapper from "../components/MainWrapper.jsx";
import TopNav from "../components/TopNav.jsx";
import ModalWindow from "../components/ModalWindow.jsx";
import { windowActions } from "../store/slices/window.js";
import { useLocation } from "react-router";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MaximizeImage from "../components/MaximizeImage.jsx";


export default function RootPage() {
	const windowOpen = useSelector((state) => state.window.isOpen);
	const dispatch = useDispatch();

	const location = useLocation();
	useEffect(() => {
		//* close the window if the page changes
		dispatch(windowActions.close());
	}, [location]);

	return (
		<>
			<MainWrapper>
				<TopNav></TopNav>
				{windowOpen && <ModalWindow></ModalWindow>}
				<MaximizeImage />
				<Outlet></Outlet>
			</MainWrapper>
		</>
	);
}

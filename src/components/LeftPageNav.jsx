import { useEffect, useState } from "react";
import LeftPageNavButton from "./LeftPageNavButton";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function LeftPageNav() {
	const [activePage, setActivePage] = useState(0);
	const lang = useSelector((state) => state.theme.lang);
	const location = useLocation();

	function toggleButton(index) {
		setActivePage(index);
	}

	useEffect(() => {
		switch (location.pathname) {
			case "/":
				setActivePage(1);
				break;
			case "/skills":
				setActivePage(2);break;
			case "/aboutMe":
				setActivePage(3);
				break;
			case "/contacts":
				setActivePage(4);
				break;
			default:
				setActivePage(1);
				break;
		}
	}, [location.pathname]);

	return (
		<aside className="flex-col h-[60vh] absolute left-10 top-[20vh] hidden lg:flex">
			<hr className="border-[1px] rounded border-theme-muted absolute h-full left-[35px]" />

			<div className="z-10 flex flex-col justify-around flex-1">
				<LeftPageNavButton
					num="01"
					active={activePage === 1}
					onClick={() => {
						toggleButton(1);
					}}
					href="/">
					{["Welcome", "Здравей"][lang]}
				</LeftPageNavButton>

				<LeftPageNavButton
					num="02"
					active={activePage === 2}
					onClick={() => {
						toggleButton(2);
					}}
					href="/skills">
					{["Skills", "Умения"][lang]}
				</LeftPageNavButton>

				<LeftPageNavButton
					num="03"
					active={activePage === 3}
					onClick={() => {
						toggleButton(3);
					}}
					href="/aboutMe">
					{["About me", "За мен"][lang]}
				</LeftPageNavButton>

				<LeftPageNavButton
					num="04"
					active={activePage === 4}
					onClick={() => {
						toggleButton(4);
					}}
					href="/contacts">
					{["Contacts", "Контакти"][lang]}
				</LeftPageNavButton>
			</div>
		</aside>
	);
}

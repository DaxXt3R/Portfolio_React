import { Link } from "react-router";

export default function LeftPageNavButton({href,children,active,num="##",onClick}) {

	return (
		<Link 
			className={`flex items-center gap-2 text-sm cursor-pointer ${active? "text-theme-bold font-bold":"text-theme-muted font-medium"}`} 
			onClick={onClick}
			to={href}
		>
			<h4 className={(active? "":"translate-x-10")+" w-6 text-right duration-200"}>{num}</h4>
			<div className={(active? "bg-theme-bold":"bg-theme-muted")+" size-2 rounded-full duration-200"}></div>
			<h4 className={(active?"opacity-100":"opacity-0")+" duration-200"}>{children}</h4>
		</Link>
	);
};

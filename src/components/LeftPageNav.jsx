import LeftPageNavButton from "./LeftPageNavButton";

export default function LeftPageNav() {
	return (
		<aside className="flex-col h-[60vh] absolute left-10 top-[20vh] hidden lg:flex">
			
			<hr className="border-[1px] rounded border-theme-muted absolute h-full left-[35px]"/>
			
			
			<div className="z-10 flex flex-col justify-around flex-1">
				<LeftPageNavButton num="01" active={true}>Здравей</LeftPageNavButton>				
				<LeftPageNavButton >Умения</LeftPageNavButton>				
				<LeftPageNavButton>За Мен</LeftPageNavButton>				
				<LeftPageNavButton>Контакти</LeftPageNavButton>				


			</div>
		</aside>
	);
};
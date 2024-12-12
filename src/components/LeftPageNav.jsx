export default function LeftPageNav() {
		return (
			<aside className="flex-col h-[60vh] absolute left-10 top-60 hidden lg:flex">
				
				<hr className="border-[1px] rounded border-theme-muted absolute h-full left-9"/>
				
				
				<div className="z-10">
					<a className="text-theme-bold font-bold flex items-center gap-2 text-sm">
						<h4 className="w-6 text-right">01</h4>
						<div className="bg-theme-bold size-2 rounded-full"></div>
						<h4>Здравей</h4>
					</a>
					<a className="text-theme-muted font-medium flex items-center gap-2 text-sm">
						<h4 className="w-6 text-right">02</h4>
						<div className="bg-theme-muted size-2 rounded-full"></div>
						<h4>Умения</h4>
					</a>
					<a className="text-theme-muted font-medium flex items-center gap-2 text-sm">
						<h4 className="w-6 text-right ">03</h4>
						<div className="bg-theme-muted size-2 rounded-full"></div>
						<h4>За мен</h4>
					</a>
					<a className="text-theme-muted font-medium flex items-center gap-2 text-sm">
						<h4 className="w-6 text-right">04</h4>
						<div className="bg-theme-muted size-2 rounded-full"></div>
						<h4>Контакти</h4>
					</a>


				</div>
			</aside>
		);
};
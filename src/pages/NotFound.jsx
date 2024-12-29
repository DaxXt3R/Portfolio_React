import MainWrapper from "../components/MainWrapper";

export default function NotFoundPage() {
	return (
		<MainWrapper>
			<div className="flex flex-col gap-4 justify-center size-full items-center max-w-[1170px] m-auto p-4">
				<div className="">
					<img src="/notFound.gif" alt="" className="pl-2" />
					<hr className="border-theme-text border-[1.5px] rounded" />
				</div>
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold text-center px-4">
					Oops that page doesn't exist
				</h1>
				<h2 className="font-bold text-xl text-theme-muted">Please go back, and try again.</h2>
			</div>
		</MainWrapper>
	);
}

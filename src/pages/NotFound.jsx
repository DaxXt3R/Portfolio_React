import MainWrapper from "../components/MainWrapper";

export default function NotFoundPage() {
	return (
		<MainWrapper>
			<div className="flex flex-col justify-center size-full items-center">
				<h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6 text-center">
					Oops that page doesn't exist
				</h1>
				<h2 className="font-bold text-xl text-theme-muted">
					Please go back, and try a different page
				</h2>
			</div>
		</MainWrapper>
	);
}

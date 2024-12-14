export default function ThemeToggler(props) {

	return (
		<label className={"grid cursor-pointer place-items-center"} >
			<input type="checkbox" value="light" 
				// onClick={} 
				className="toggle col-span-2 col-start-1 border-0 row-start-1 bg-theme-bg hover:bg-inherit [--tglbg:var(--muted)] " />
			<span className="material-symbols-rounded col-start-1 row-start-1 text-lg text-theme-muted">brightness_low</span>
			<span className="material-symbols-rounded col-start-2 row-start-1 text-lg">dark_mode</span>
		</label>
	);
};
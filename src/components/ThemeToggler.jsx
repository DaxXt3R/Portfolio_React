import { useEffect, useState } from "react";

export default function ThemeToggler() {
	const [theme,setTheme]=useState(sessionStorage.getItem("theme") || "light")	//if theme is not found in storage, set it to light
	
	useEffect(()=>{			//useEffect gets executed after component re-renders so theme will always be updated value here
		console.log("theme is",theme);
		sessionStorage.setItem("theme",theme)
	},[theme])

	return (
		<label className="grid cursor-pointer place-items-center" >
			<input type="checkbox" value="light" 
				onClick={(e)=>{

					theme=="light"? setTheme("dark"):setTheme("light")
				}} 
				className="toggle col-span-2 col-start-1 border-0 row-start-1 bg-theme-bg hover:bg-inherit [--tglbg:var(--muted)] " />
			<span className="material-symbols-rounded col-start-1 row-start-1 text-lg text-theme-muted">brightness_low</span>
			<span className="material-symbols-rounded col-start-2 row-start-1 text-lg">dark_mode</span>
		</label>
	);
};
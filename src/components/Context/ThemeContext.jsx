import { createContext,useState } from "react";

const ThemeContext=createContext({	//this holds the default values to be passed down, put this in useContext()
	theme: "light",
	toggleTheme: ()=>{},
	
	accent: "red",
	setAccent: (color)=>{},

})	
export default ThemeContext

export function ThemeProvider({children}) {		//this holds all the logic and passes down whatever you put in the value={} to it's children
	
	const [theme,setTheme]=useState(sessionStorage.getItem("theme")||"light") //light is default value in case theme doesnt exist in storage
	const [accent,setAccent]=useState(sessionStorage.getItem("accent")||"red")

	function toggleTheme() {
		setTheme(theme=="light"? "dark":"light")
	}


	return (
		<ThemeContext.Provider value={{ theme,toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

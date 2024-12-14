import ThemeToggler from "./ThemeToggler";
import ThemeContext from "./Context/ThemeContext";
import { useContext } from "react";
import LanguageContext from "./Context/LanguageContext";

export default function TopNav() {
    const {theme} = useContext(ThemeContext);
    const {lang,setLang}=useContext(LanguageContext)
    
    function changeLang() {
        lang==0? setLang(1):setLang(0)
    }

    return (
        <nav className={"h-20 w-full sticky top-0 z-20"+` bg-${theme}`} style={{maskImage: "linear-gradient(to bottom, white 60%, transparent 100%)"}}>
            <div className="max-w-[1408px] flex justify-between items-center text-theme-muted  mx-auto px-4 pt-2">
                <a href="" className="material-symbols-rounded col-start-1 row-start-1 text-3xl w-[88px]">home</a>
                
                <ThemeToggler></ThemeToggler>
                <div>
                    <button className="font-bold mr-7 text-xl align-middle" onClick={changeLang}>{lang==0?"EN":"BG"}</button>
                    <button className="material-symbols-rounded align-middle text-3xl">menu</button>
                </div>
            </div>
        </nav>
    );
};
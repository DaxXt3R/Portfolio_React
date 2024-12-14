import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

export default function MainWrapper(props) {

    const {theme} = useContext(ThemeContext);
    console.log(theme);
    

    return (
        <div className={"w-full flex flex-col min-h-screen "+`theme-${theme} bg-${theme} ` } id="MainWrapper">
            {props.children}
        </div>
    );
};  
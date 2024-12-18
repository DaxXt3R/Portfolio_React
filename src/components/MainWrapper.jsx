import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import styled from "styled-components";
   
const Div=styled.div`
    background: var(--gradient);
`

export default function MainWrapper(props) {

    const {theme} = useContext(ThemeContext);
    console.log(theme);

    return (
        <Div className={"w-full flex flex-col min-h-screen "+`theme-${theme}` } id="MainWrapper">
            {props.children}
        </Div>
    );
};  
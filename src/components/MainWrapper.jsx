export default function MainWrapper(props) {
    return (
        <div className={"w-full flex flex-col min-h-screen "+`theme-${sessionStorage.getItem("theme")} bg-${sessionStorage.getItem("theme")} ` } id="MainWrapper">
            {props.children}
        </div>
    );
};  
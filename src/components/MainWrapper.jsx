export default function MainWrapper(props) {
    return (
        <div className={"w-full bg-light flex flex-col min-h-screen "+`theme-${sessionStorage.getItem("theme")}` } id="MainWrapper">
            {props.children}
        </div>
    );
};  
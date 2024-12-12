export default function MainWrapper(props) {
    return (
        <div className="w-full bg-light flex flex-col min-h-screen" id="MainWrapper">
            {props.children}
        </div>
    );
};  
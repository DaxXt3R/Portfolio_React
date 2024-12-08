export default function MainComponent(props) {
    return (
        <div className="w-screen h-screen bg-black">
            {props.children}
        </div>
    );
};
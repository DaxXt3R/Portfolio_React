export default function MainWrapper(props) {
    return (
        <div className="w-full grow bg-black">
            {props.children}
        </div>
    );
};
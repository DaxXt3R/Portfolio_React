export default function MainWrapper(props) {
    return (
        <div className="w-full grow bg-light px-8">
            {props.children}
        </div>
    );
};
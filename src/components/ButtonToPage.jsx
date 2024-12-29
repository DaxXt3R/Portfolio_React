import { Link } from "react-router";


export default function ButtonToPage({children, href}) {
    return (
        <Link to={href} className="text-xl font-bold text-theme-accent hover:underline self-end cursor-pointer">
            {children}
            <span className="material-symbols-rounded align-middle text-3xl m-0 font-bold">double_arrow</span>
        </Link>
    );
};

// default
//* Important
//! Warning
//? Question
// TODO 
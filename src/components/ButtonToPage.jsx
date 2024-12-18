import { Children } from "react";

export default function ButtonToPage({children, href}) {
    return (
        <a href={href} className="text-xl font-bold text-theme-accent hover:underline self-end cursor-pointer">
            {children}
            <span className="material-symbols-rounded align-middle text-3xl m-0 font-bold">double_arrow</span>
        </a>
    );
};

// default
//* Important
//! Warning
//? Question
// TODO 
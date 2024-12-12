import styled from "styled-components";

const Svg=styled.svg`
    color: var(--muted);
    &:hover{
        color: var(--accent);
    }
    cursor: pointer;
    transition: .2s;
`

export default function Icon({path, className, href}) {
    return (
        <a href={href} className={`${className}`}>
            <Svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                <path d={path}/>
            </Svg>
        </a>
    );
};
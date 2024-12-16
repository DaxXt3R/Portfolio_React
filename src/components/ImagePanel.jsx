import { useState } from "react";

export default function ImagePanel({ src, desc, className }) {

  const[hovered,setHovered]=useState(false)

  return (
    <div className={`${className} relative overflow-hidden rounded-2xl border-2 border-theme-muted hover:border-theme-accent cursor-pointer flex flex-col`} onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}>
        <img src={src} alt="" className="grayscale hover:grayscale-0 duration-500 object-cover size-full"/>
        <div id="label" className={"w-full bg-[rgba(0,0,0,50%)] text-white font-medium absolute bottom-0 line-clamp-2 duration-200 text-center "+(hovered?"h-14 p-1 ":"h-0 ")}>{desc}</div>
    </div>
  );
}

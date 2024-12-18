import LanguageContext from "./Context/LanguageContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import ButtonToPage from "./ButtonToPage";

const DashedLine = styled.hr`
  border-style: dashed;
  border-radius: 8px;
  width: 50%;
`;

export default function ModalWindow({
  heading = "heading:add title here",
  description = "description = put the description here",
  github,
  btn = "btn",
	closeWindow,
}) {
  const { lang } = useContext(LanguageContext);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function mouseDownHandler(event) {
    if (event.target !== event.currentTarget) return; //By checking e.target !== e.currentTarget, we ensure that dragging only starts when clicking on the parent div's padding, not the inner content.
    setDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  }

  function mouseMoveHandler(event) {
    if (!dragging) return;

    const targetX = event.clientX - offset.x;
    const targetY = event.clientY - offset.y;
    // Get window dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Get element's dimensions
    const elementWidth = event.currentTarget.offsetWidth;
    const elementHeight = event.currentTarget.offsetHeight;
    // 
    const confinedX = Math.max(0, Math.min(targetX, windowWidth - elementWidth));
    const confinedY = Math.max(0, Math.min(targetY, windowHeight - elementHeight));

    setPosition({
      x: confinedX,
      y: confinedY,
    });
  }

  const mouseUpHandler = () => {
    setDragging(false);
  };


  return (
    <div
      id="ModalWindow"
      className={
        "rounded-2xl absolute bg-theme-window resize overflow-hidden px-16 py-12 z-30 gap-1 flex flex-col drop-shadow-[4px_4px_6px_rgba(0,0,0,50%)] " +
        `${dragging && "cursor-move select-none"}`
      }
      style={{ top: `${position.y}px`, left: `${position.x}px` }} //? this shit doesnt work with tailwind for some reason
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
    >
      <button
        onClick={()=>{console.log("x button clicked");closeWindow()
				}}
        className="material-symbols-rounded text-[40px] absolute right-6 top-3 text-theme-text hover:text-theme-muted p-0 size-7"
      >
        disabled_by_default
      </button>
      <h1 className="text-6xl font-bold text-theme-bold">{heading}</h1>
      <hr className="decoration-2 border-[1px] border-theme-muted border-dashed" />
      <div className="flex h-full gap-6 pt-4">
        <div className="bg-black h-full w-2/5 ">
          <img src="" alt="" />
        </div>
        <div className="grow">
          <p className="text-theme-text">{["english", "bulgarian"][lang]}</p>
          <div>
            <ButtonToPage>{btn}</ButtonToPage>
          </div>
        </div>
      </div>
    </div>
  );
}

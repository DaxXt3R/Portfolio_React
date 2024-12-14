import { useEffect, useState } from "react";
import LeftPageNavButton from "./LeftPageNavButton";

export default function LeftPageNav() {
  const [activePage, setActivePage] = useState(0);
  function toggleButton(index) {
    setActivePage(index);
	
  }

	useEffect(()=>{
		setActivePage(1)
	},[])


  return (
    <aside className="flex-col h-[60vh] absolute left-10 top-[20vh] hidden lg:flex">
      <hr className="border-[1px] rounded border-theme-muted absolute h-full left-[35px]" />

      <div className="z-10 flex flex-col justify-around flex-1">
        <LeftPageNavButton num="01" active={activePage===1} onClick={()=>{toggleButton(1)}}>
          Здравей
        </LeftPageNavButton>
        
				<LeftPageNavButton num="02" active={activePage===2} onClick={()=>{toggleButton(2)}}>
					Умения
				</LeftPageNavButton>
        
				<LeftPageNavButton num="03" active={activePage===3} onClick={()=>{toggleButton(3)}}>
					За Мен
				</LeftPageNavButton>
        
				<LeftPageNavButton num="04" active={activePage===4} onClick={()=>{toggleButton(4)}}>
					Контакти
				</LeftPageNavButton>
      </div>
    </aside>
  );
}

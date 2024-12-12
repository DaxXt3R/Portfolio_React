import SocialLinks from "./SocialLinks";
import ButtonToPage from "./ButtonToPage";

export default function HomePage() {
    return (
        <main className="px-4 my-auto">
            <section className="flex flex-col lg:flex-row text-theme-text max-w-[1170px] mx-auto mt-8">
                <div className="flex flex-col justify-between">
                    <h1 className="text-theme-bold text-3xl lg:text-6xl font-bold mb-6">
                    Здравейте, аз съм  
                    <br />Диян и програмирам 
                    <br /><span className="text-theme-accent">Back-end решения.</span>
                    <br /> За вас.
                    </h1>
                    <SocialLinks className="hidden lg:flex"></SocialLinks>
                </div>

                <img src="src/assets/red-dayCOVER 1.png" alt="" className="object-contain h-[430px] mx-auto drop-shadow-[4px_0px_6px_rgba(0,0,0,50%)]"/>
                
                <hr className="border-2 rounded border-theme-muted lg:hidden"/>
                <SocialLinks className="lg:hidden" ></SocialLinks>
            </section>
            <hr className="border-2 rounded border-theme-muted max-w-[1170px] mx-auto"/>
            
            <section className="flex flex-col lg:flex-row gap-4 py-4 w-full lg:justify-between max-w-[1170px] lg:max-h-[244px] mx-auto">
                <h2 className="font-bold text-xl text-theme-bold lg:hidden">Това са личните ми проекти</h2>
                <img src="src/assets/imageDefault.jpg" alt="" className="rounded-2xl border-2 border-theme-muted object-cover lg:w-1/4"/>
                <img src="src/assets/imageDefault.jpg" alt="" className="rounded-2xl border-2 border-theme-muted object-cover lg:w-1/4"/>
                <div className="flex-col flex lg:w-[470px]">
                    <h2 className="font-bold text-xl text-theme-bold hidden lg:block">Това са личните ми проекти.</h2>
                    <p className="text-theme-text text-justify font-medium">
                        Не са много на брой, защото се концентрирам в/у качество вместо количество. Ориентирвам се около разработването на Full-Stack приложения, защото искам да разбирам цялостния процес от-до. Списъкът постепенно ще расте във времето, но ако харесвате това което виждате за сега ще се радвам да работим заедно!
                    </p>
                    <ButtonToPage href="/test1" >ПРОЕКТИ</ButtonToPage>
                </div>
            </section>
        </main>
    );
};
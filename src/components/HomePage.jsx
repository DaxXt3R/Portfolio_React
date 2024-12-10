export default function HomePage() {
    return (
        <main className="flex flex-col text-theme-text max-w-[1170px] mx-auto mt-8">
            <section>
                <h1 className="text-theme-bold text-3xl lg:text-6xl font-bold">
                Здравейте, аз съм  Диян и програмирам 
                <br /><span className="text-theme-accent">Back-end решения.</span>
                <br /> За вас.
                </h1>
                <img src="src/assets/red-dayCOVER 1.png" alt="" className="object-contain"/>
                <hr className="border-2 rounded border-theme-muted"/>
                <menu className="flex justify-between items-center lg:w-48 my-4 mx-8 lg:mx-0 ">
                    <a href="" ><img src="src/assets/gitHub logo.svg" alt="" /></a>
                    <a href="">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" style={{color:"var(--muted)"}} xmlns="http://www.w3.org/2000/svg"><path d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6235 5.48528 28.8669 12.6562 30V19.4538H8.84577V15.0913H12.6562V11.7663C12.6562 7.98438 14.8942 5.89533 18.3218 5.89533C19.9633 5.89533 21.6798 6.18986 21.6798 6.18986V9.90183H19.7879C17.925 9.90183 17.3438 11.0653 17.3438 12.2586V15.0913H21.5038L20.8385 19.4538H17.3438V30C24.5147 28.8669 30 22.6235 30 15.0913Z" /></svg>
                    </a>
                    <a href="" >
                        <svg width="31" height="21" viewBox="0 0 31 21" fill={"var(--muted)"} xmlns="http://www.w3.org/2000/svg"><path d="M30.3522 3.28579C29.9957 1.99243 28.9452 0.97382 27.6115 0.628141C25.194 0 15.5 0 15.5 0C15.5 0 5.80608 0 3.3885 0.628141C2.05475 0.973875 1.0043 1.99243 0.647775 3.28579C0 5.63008 0 10.5212 0 10.5212C0 10.5212 0 15.4124 0.647775 17.7566C1.0043 19.05 2.05475 20.0262 3.3885 20.3719C5.80608 21 15.5 21 15.5 21C15.5 21 25.1939 21 27.6115 20.3719C28.9452 20.0262 29.9957 19.05 30.3522 17.7566C31 15.4124 31 10.5212 31 10.5212C31 10.5212 31 5.63008 30.3522 3.28579ZM12.3295 14.962V6.08043L20.4318 10.5213L12.3295 14.962Z"/></svg>
                    </a>
                    <a href="" ><img src="src/assets/IG logo.svg" alt="" 
                        style={{ filter: 'invert(23%) sepia(86%) saturate(1656%) hue-rotate(330deg) brightness(101%) contrast(96%)'}}/></a>
                </menu>
                <hr className="border-2 rounded border-theme-muted"/>
            </section>
        </main>
    );
};
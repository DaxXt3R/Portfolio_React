export default function TopNav() {
    return (
        <nav className="h-10 w-full max-w-[1408px] flex justify-between mx-auto items-center text-theme-muted">
            <a href="" className="material-symbols-rounded col-start-1 row-start-1 text-3xl w-[88px]">home</a>
            <label className="grid cursor-pointer place-items-center">
                <input type="checkbox" value="synthwave"
                    className="toggle col-span-2 col-start-1 border-theme-muted row-start-1 bg-theme-muted " />
                <span className="material-symbols-rounded col-start-1 row-start-1 text-lg">light_mode</span>
                <span className="material-symbols-rounded col-start-2 row-start-1 text-lg">dark_mode</span>
            </label>
            <div>
                <button className="font-bold mr-7 text-xl align-middle">BG</button>
                <button className="material-symbols-rounded align-middle text-3xl">menu</button>
            </div>
        </nav>
    );
};
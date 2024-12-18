import ImagePanel from "../ImagePanel";
import { useContext } from "react";


export default function ProjectPanelNuchan() {
	const {lang}=useContext(LanguageContext)

  return (
    <ImagePanel
      src={"src/assets/nuchan panel.png"}
      className={"lg:w-[340px] mx-4 lg:mx-0"}
      desc={
        [
          "NUchan is a cosmetic visual update to 4chan.org with added features",
          "NUchan е козметичен ъпдейт на 4chan.org с добавени функции",
        ][lang]
      }
    ></ImagePanel>
  );
}

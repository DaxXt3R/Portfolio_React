import { createContext, useState } from "react";

const LanguageContext = createContext({
  lang: 0,
  setLang: (lang) => {},
});
export default LanguageContext;

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(0);

  return (
    <LanguageContext.Provider value={{lang,setLang}}>{children}</LanguageContext.Provider>
  );
}

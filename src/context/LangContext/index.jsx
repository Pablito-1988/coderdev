import { createContext, useContext, useState } from "react";
import i18next from "i18next";


const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng"));

  const languageChange = (language) => {
    setLang(language);
    return lang;
  };

  const description = (interview) => {
    if (lang === "pt") {
      return interview.descripcionPt;
    } else {
      return interview.descripcionEntrevista;
    }
  };

  return (
    <LangContext.Provider value={{languageChange,lang,description}}>
      {children}
    </LangContext.Provider>
  );
};

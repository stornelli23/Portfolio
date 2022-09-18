/**
 The LanguageButton component is a functional component that uses the useContext hook to access the
 language and toggleLanguage functions from the LanguageContext.  */
import { useContext } from "react";
import { LanguageContext } from "../../MultilingualContext/context";
import '../../App.css';

export const LanguageButton = () => {
  const { setLanguageEnglish, setLanguageSpanish } = useContext(LanguageContext);

  return (
    <div className="d-flex flex-row align-items-center">
      <button className="languageButton d-flex flex-row align-items-center" onClick={setLanguageEnglish}>  <img style={{width: '1.4em'}} src="/img/bandera-eeuu.png" alt='english'/>  </button>
      <button className="languageButton d-flex flex-row align-items-center pe-0" onClick={setLanguageSpanish}> <img style={{width: '1.4em'}} src="/img/bandera-españa.png" alt="español"/>  </button>
    </div>
  );
};
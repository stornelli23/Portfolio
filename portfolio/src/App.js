import Main from './Components/Main'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LanguageContext } from "./MultilingualContext/context";

function App() {

  /* Setting the language to english. */
  const [language, setLanguage] = useState("english");

  /**
   * If the language is english, set the language to español. If the language is español, set the language to english */
  
  function setLanguageEnglish() {
    setLanguage((language) => (language === "español" ? "english" : "english"));
  }

  function setLanguageSpanish() {
    setLanguage((language) => (language === "english" ? "español" : "español"));
  }

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguageEnglish, setLanguageSpanish }}>
        <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        </Routes>
      </LanguageContext.Provider>
    </>
  );
}

export default App;

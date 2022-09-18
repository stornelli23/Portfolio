/* Creating a context object that will be used to pass the language data to the components. */
import { createContext } from "react";
import { translations } from "./translations";

export const LanguageContext = createContext(translations.english);
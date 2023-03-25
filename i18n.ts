// export enum Language {
//   English = "en",
//   Ukrainian = "uk",
// }

// export type LanguageOption = {
//   id: Language;
//   flag: string;
// };

// export const defaultLanguage = Language.English;
// export const supportedLanguages = Object.values(Language);

// export enum Namespace {
//   Common = "common",
//   Navigation = "navigation",
//   Languages = "lang",
//   Footer = "footer",
//   Home = "home",
// }
// export const defaultNamespace = Namespace.Common;
// export const namespaces = Object.values(Namespace);
// export const globalNamespaces = [
//   Namespace.Languages,
//   Namespace.Navigation,
//   Namespace.Footer,
// ];
import i18next from "i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export enum Sections {
  Navigation = "navigation",
  Home = "home",
  Footer = "footer",
  Technologies = "technologies",
  Services = "services",
  Features = "features",
  Decision = "decision",
  Prices = "prices",
  Reviews = "reviews",
  Langs = "langs",
  Form = "form",
}
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
      excludeCacheFor: ["cimode"],
    },

    interpolation: {
      escapeValue: false,
    },
  });
// i18n.init();

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./modules/locales/en";
import sv from "./modules/locales/sv";

const fallbackLng = ["en"];
const availableLanguages = ["en", "sv"];

const resources = { en: en, sv: sv };

i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  whitelist: availableLanguages,
  interpolation: { escapeValue: false },
});

export default i18n;

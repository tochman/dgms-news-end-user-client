import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import 


const fallbackLng = ['en']
const avaiablelanguages = ['en', 'sv']

const resources = {en: "en", sv: "sv"}

i18next.use(initReactI18next).init({
  resources,
  fallbackLng,
  whitelist: avaiablelanguages,
  interpolation: { escapeValue: false },
})

export default i18n

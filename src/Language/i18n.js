import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import { lt } from './lt';


const Lang = async () => {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: ['lt'],
      react: {
        useSuspense: false //   <---- this will do the magic
      },
      compatibilityJSON: 'v3',
      // we init with resources

      resources: {
        lt: lt,
     
      },
      debug: false,
      fallbackLng: 'lt',

      // have a common namespace used around the full app
      ns: ["translations"],
      defaultNS: "translations",

      keySeparator: false, // we use content as keys
      returnObjects: true,
      interpolation: {
        escapeValue: false
      }

    });

}
export default Lang;

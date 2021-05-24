import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import common_de from './translationsSrb.json';
import common_en from './translationEng.json';

const resources = {
  sr: {
    translation: common_de,
  },
  en: {
    translation: common_en,
  },
};

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    resources, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    lng: 'de',
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TRANSLATIONS_ES from './translations/es/translations';
import TRANSLATIONS_EN from './translations/en/translations';

// Resolves once i18next has finished initialising. The entry point waits on it
// before rendering; tests only need the import for its side effect, so that
// useTranslation() hands components a real instance instead of a stub.
export const i18nReady = i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
    es: {
      translation: TRANSLATIONS_ES,
    },
  },
  react: { useSuspense: false },
});

export default i18n;

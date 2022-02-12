import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import './index.css';
import App from './App';
import { register as registerServiceWorker } from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import TRANSLATIONS_ES from './translations/es/translations';
import TRANSLATIONS_EN from './translations/en/translations';

i18n.use(initReactI18next).init(
  {
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
  },
  () => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();

// jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/vitest';

// Components call useTranslation(), which needs a live i18next instance.
// The app sets one up in src/index.jsx, which tests never import.
import './i18n';

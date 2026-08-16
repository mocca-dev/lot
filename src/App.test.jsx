import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

test('renders the app shell', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container.querySelector('.App')).toBeInTheDocument();
});

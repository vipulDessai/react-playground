import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './_helpers';

describe('render', () => {
  test('App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId(/home/i)).toBeInTheDocument();
  });
})

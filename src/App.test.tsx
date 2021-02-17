import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/dom';
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

    expect(screen.getByText(/home is where the war is!!/i)).toBeInTheDocument();
  });
});

describe('router', () => {
  test('check Home -> Posts', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/home is where the war is!!/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole('link', {
      name: /Posts/i
    }));

    const idElement = await screen.findAllByRole('listitem');
    
    idElement.forEach((item, index) => {
      const liChildELement = item.querySelectorAll('li');
      if(liChildELement && liChildELement.length == 2) {
        const { getByText } = within(item);
        expect(getByText(/id - /i)).toBeInTheDocument();
      }
    });
  })
});

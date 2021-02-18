import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent, waitFor, within, waitForElementToBeRemoved } from '@testing-library/dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './_helpers';
import { Form } from './_components';
import { FunctionalComponent } from './FunctioningComponent/FunctionalComponent';

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

    await waitFor(async () => await screen.findAllByRole('listitem'));

    const idElement = screen.getAllByRole('listitem');
    
    idElement.forEach((item, index) => {
      const liChildELement = item.querySelectorAll('li');
      if(liChildELement && liChildELement.length == 2) {
        const { getByText } = within(item);
        expect(getByText(/id - /i)).toBeInTheDocument();
      }
    });
  })
});

describe('form', () => {
  test('form fields validations', async () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);

    const formData = {
      fName: 'foo',
      lName: 'bar',
      haveBike: false,
      haveCar: false,
      birthDate: '2021-02-25',
      email: 'foo@bar.com',
      noOfTasks: '3',
      password: '12345',
      gender: 'female',
      phone: '9403002',
      wStartTime: '12:11',
      favFlavor: 'mango'
    }

    userEvent.type(screen.getByLabelText(/first Name/i), formData.fName);
    userEvent.type(screen.getByLabelText(/last name/i), formData.lName);
    userEvent.type(screen.getByLabelText(/Password/i), formData.password);
    userEvent.type(screen.getByLabelText(/Birth Date/i), formData.birthDate);
    userEvent.type(screen.getByLabelText(/Email/i), formData.email);
    userEvent.type(screen.getByLabelText(/Number of tasks/i), formData.noOfTasks);
    userEvent.type(screen.getByLabelText(/Phone/i), formData.phone);
    userEvent.type(screen.getByLabelText(/Work started Time/i), formData.wStartTime);

    userEvent.click(screen.getByLabelText(/I have a bike/i));
    userEvent.click(screen.getByLabelText(/Female/i));

    formData.favFlavor = 'coconut';

    userEvent.selectOptions(screen.getByLabelText(/Pick your favorite flavor/i), formData.favFlavor);
    expect(screen.getByLabelText(/Pick your favorite flavor/i)).toHaveValue(formData.favFlavor);

    expect(screen.getByLabelText(/first Name/i)).toHaveValue(formData.fName);
    expect(screen.getByLabelText(/Female/i)).toBeChecked()

    expect(screen.getByLabelText(/first Name/i)).toBeValid();

    const dummyFile = new File([''], 'chucknorris.png', {type: 'image/png'});

    const fileSelector = screen.getByLabelText(/dsm file/i);

    await waitFor(
      () => fireEvent.change(
        fileSelector, 
        {
          target: {files: [dummyFile]}
        }
      )
    );

    // get the same uploader from the dom    
    let image: any = screen.getByLabelText(/dsm file/i);
    // check if the file is there
    expect(image.files[0].name).toBe('chucknorris.png');

    userEvent.click(screen.getByRole('button', {name: /submit/i}));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      fName: formData.fName,
      lName: formData.lName,
      birthDate: formData.birthDate,
      email: formData.email,
      noOfTasks: formData.noOfTasks,
      password: formData.password,
      gender: formData.gender,
      phone: formData.phone,
      wStartTime: formData.wStartTime,
      favFlavor: formData.favFlavor,
      dsmFile: {current: image},
      haveBike: true,
      haveCar: false,
    });
  });
});

describe('mocks', () => {
  test('mock users in functional component', () => {
    const getUsers = () => {
      const users = [
          {
              "id": 0,
              "name": "Foo Bar",
          },
      ];
  
      return users;
    }
    render(<FunctionalComponent foo={"foo"} getUsers={getUsers} />);

    expect(screen.getByText(/foo bar/i)).toBeInTheDocument();
  });
})

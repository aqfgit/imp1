import React from 'react';
import {idText} from 'typescript';
import {render, fireEvent} from 'test-utils';
import MockedNavigator from 'MockedNavigator';
import Login from '../Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Routes} from '../../Routes';
beforeEach(() => {
  AsyncStorage.clear();
});

it('renders the text and button', () => {
  const {getByText} = render(
    <MockedNavigator component={Login} params={undefined} />,
  );
  const text = getByText('Im a login screen');
  const button = getByText('log me in bb');
});

it('logs the user in after pressing the button', async () => {
  const {getByText, findByText} = render(<Routes />);

  const text = await findByText('Im a login screen');
  const button = await findByText('log me in bb');
  fireEvent(button, 'onPress');
  const newText = await findByText('Welcome to the feed');
});

it('logs the user out after pressing logout', async () => {
  const {getByText, findByText} = render(<Routes />);
  const button = await findByText('log me in bb');
  fireEvent(button, 'onPress');
  const logoutButton = await findByText('Logout');
  fireEvent(logoutButton, 'onPress');
  const loginText = await findByText('Im a login screen');
});

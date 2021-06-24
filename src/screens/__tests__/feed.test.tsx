import React from 'react';
import {idText} from 'typescript';
import {render, fireEvent} from 'test-utils';
import MockedNavigator from 'MockedNavigator';
import Login from '../Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Routes} from '../../Routes';
import Feed from '../Feed';

it('renders elements in a list', async () => {
  const {getByTestId, findAllByTestId, getAllByTestId, findAllByText, debug} =
    render(<MockedNavigator component={Feed} params={undefined} />);
  expect(getAllByTestId('flat-list').length).toBe(1);
  const listItems = await findAllByTestId('flat-list-item');

  expect(listItems.length).toBe(50);
});

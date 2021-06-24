import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {addProductRoutes} from './addProductRoutes';
import {SearchParamList} from '../paramLists/SearchParamList';
import Search from '../screens/Search';

interface SearchStackProps {}

const Stack = createStackNavigator<SearchParamList>();

export const SearchStack: React.FC<SearchStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack as any)}
    </Stack.Navigator>
  );
};

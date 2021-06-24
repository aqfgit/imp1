/* eslint-disable react/display-name */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {addProductRoutes} from './addProductRoutes';
import {HomeParamList} from '../paramLists/HomeParamList';
import {useAuthState} from '../state/AuthProvider';
import Feed from '../screens/Feed';

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  const {logout} = useAuthState();

  const renderLogoutButton = () => (
    <TouchableOpacity onPress={logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: renderLogoutButton,
        }}
        component={Feed}
      />
      {addProductRoutes(Stack as any)}
    </Stack.Navigator>
  );
};

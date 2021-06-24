/* eslint-disable react/display-name */
import {
  useNavigation,
  useRoute,
  RouteProp,
  StackNavigationState,
  TypedNavigator,
} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {StackNavigationEventMap} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {HomeParamList} from '../paramLists/HomeParamList';
import {SearchParamList} from '../paramLists/SearchParamList';
import EditProduct from '../screens/EditProduct';
import Product from '../screens/Product';

export const addProductRoutes = (
  Stack: TypedNavigator<
    SearchParamList | HomeParamList,
    StackNavigationState<Record<string, object | undefined>>,
    StackNavigationOptions,
    StackNavigationEventMap,
    ({initialRouteName, children, screenOptions, ...rest}: any) => JSX.Element
  >,
) => {
  return (
    <>
      <Stack.Screen
        options={({route}) => ({headerTitle: `Product: ${route.params.name}`})}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={({route}) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                route.params.submit?.current();
              }}>
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
    </>
  );
};

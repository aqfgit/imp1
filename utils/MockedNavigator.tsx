import React, {FunctionComponent, ComponentClass} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

type Props = {
  component: ComponentClass<any> | FunctionComponent<any>;
  params: any;
};

const Stack = createStackNavigator();
const MockedNavigator: React.FC<Props> = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;

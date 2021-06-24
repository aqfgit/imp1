import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppParamList} from '../paramLists/AppParamList';
import {HomeStack} from './HomeStack';
import {SearchStack} from './SearchStack';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};

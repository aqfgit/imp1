import React, {useState} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {ActivityIndicator, Alert, Button, Text, View} from 'react-native';
import {Center} from './components/Center';
import {useAuthState} from './state/AuthProvider';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppTabs} from './navigators/AppTabs';
import {AuthStack} from './navigators/AuthStack';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const {user, login} = useAuthState();

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          //decode it
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" color="#dadada" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

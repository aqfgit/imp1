import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../components/Center';
import {AuthParamList} from '../paramLists/AuthParamList';
import {useAuthState} from '../state/AuthProvider';

const Login = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthParamList, 'Login'>>();
  const route = useRoute<RouteProp<AuthParamList, 'Login'>>();
  const {login} = useAuthState();
  return (
    <Center>
      <Text>Im a login screen</Text>
      <Button
        title="log me in bb"
        onPress={() => {
          login();
        }}
        color={'red'}
      />
    </Center>
  );
};

export default Login;

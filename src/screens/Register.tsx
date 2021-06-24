import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {Center} from '../components/Center';
import {AuthParamList} from '../paramLists/AuthParamList';

const Register = () => {
  const navigation =
    useNavigation<StackNavigationProp<AuthParamList, 'Register'>>();
  return (
    <Center>
      <Text>Im a Register screen</Text>
    </Center>
  );
};

export default Register;

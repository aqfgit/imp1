import {useNavigation, useRoute, RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useRef, useEffect} from 'react';
import {Text} from 'react-native';
import {Center} from '../components/Center';
import {HomeParamList} from '../paramLists/HomeParamList';

function apiCall(x: any) {
  return x;
}

const EditProduct = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeParamList, 'EditProduct'>>();
  const route = useRoute<RouteProp<HomeParamList, 'EditProduct'>>();
  const {name} = route;

  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({submit});
  }, []);

  return (
    <Center>
      <Text>Edit Product - {name}</Text>
    </Center>
  );
};

export default EditProduct;

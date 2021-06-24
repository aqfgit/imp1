import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../components/Center';
import {HomeParamList} from '../paramLists/HomeParamList';

const Product = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeParamList, 'Product'>>();
  const route = useRoute<RouteProp<HomeParamList, 'Product'>>();
  const {name} = route;
  return (
    <Center>
      <Text>Welcome to {name}</Text>
      <Button
        title={`edit ${name}`}
        onPress={() => navigation.navigate('EditProduct', {name})}
      />
    </Center>
  );
};

export default Product;

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import faker from 'faker';
import React from 'react';
import {FlatList, Button, Text} from 'react-native';
import {Center} from '../components/Center';
import {HomeParamList} from '../paramLists/HomeParamList';

const Feed = () => {
  const navigation =
    useNavigation<StackNavigationProp<HomeParamList, 'Feed'>>();
  return (
    <Center>
      <Text>Welcome to the feed</Text>
      <FlatList
        testID="flat-list"
        style={{width: '100%'}}
        keyExtractor={(product, index) => product + index}
        initialNumToRender={50}
        data={Array.from(Array(50), () => faker.commerce.product())}
        renderItem={({item}) => {
          return (
            <Button
              testID="flat-list-item"
              title={item}
              onPress={() => {
                navigation.navigate('Product', {name: item});
              }}
            />
          );
        }}
      />
    </Center>
  );
};

export default Feed;

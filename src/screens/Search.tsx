import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import faker from 'faker';
import React, {useState} from 'react';
import {Button, FlatList} from 'react-native';
import {Center} from '../components/Center';
import {SearchParamList} from '../paramLists/SearchParamList';

const Search = () => {
  const navigation =
    useNavigation<StackNavigationProp<SearchParamList, 'Search'>>();
  const [show, setShow] = useState(false);
  return (
    <Center>
      <Button title="Search products" onPress={() => setShow(true)} />
      {show && (
        <FlatList
          style={{width: '100%'}}
          keyExtractor={(product, index) => product + index}
          data={Array.from(Array(50), () => faker.commerce.product())}
          renderItem={({item}) => {
            return (
              <Button
                title={item}
                onPress={() => {
                  navigation.navigate('Product', {name: item});
                }}
              />
            );
          }}
        />
      )}
    </Center>
  );
};

export default Search;

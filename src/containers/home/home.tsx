import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from 'react-native';
import Colors from '../../theme/colors';

import {useQuery} from '@apollo/client';
import {CONTENT_CARD_QUERY} from '../../gql/queries';

import ListCard from '../../components/ListCard/ListCard';

const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const {data} = useQuery(CONTENT_CARD_QUERY);
  console.log(data);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={'light-content'}
        //  backgroundColor={styles.backgroundColor}
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.searchText}>Search</Text>
          <TextInput
            style={styles.searchTextBox}
            value={search}
            onChangeText={val => setSearch(val)}
          />
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data?.contentCards?.edges}
              extraData={data}
              renderItem={({item}) => <ListCard data={item} />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.DarkTeal,
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  searchText: {
    fontFamily: 'AvertaStd-Bold',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.OffWhite,
  },
  searchTextBox: {
    fontFamily: 'AvertaStd-Light',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.Grey,
    backgroundColor: '#003238',
    borderRadius: 5,
    padding: 8,
  },
});

export default Home;

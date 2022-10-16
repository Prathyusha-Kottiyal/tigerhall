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
  const {data, fetchMore} = useQuery(CONTENT_CARD_QUERY, {
    variables: {
      offset: 1,
      keywords: '',
    },
  });

  const [pageData, setPageData] = React.useState<any>();
  const [totalCount, setTotalCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (data) {
      setPageData(data.contentCards?.edges);
      setTotalCount(data.contentCards.meta.total);
    }
  }, [data]);

  const onEndReached = () => {
    if (totalCount > pageData.length) {
      fetchMore({
        variables: {
          offset: pageData.length,
          keywords: '',
        },
      }).then(fetchMoreResult => {
        setPageData([...pageData, ...fetchMoreResult.data.contentCards?.edges]);
        setTotalCount(fetchMoreResult.data.contentCards.meta.total);
      });
    }
  };

  const updateList = (val: string) => {
    setSearch(val);
    fetchMore({
      variables: {
        offset: 1,
        keywords: val,
      },
    }).then(fetchMoreResult => {
      setPageData(fetchMoreResult.data.contentCards?.edges);
      setTotalCount(fetchMoreResult.data.contentCards.meta.total);
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View>
          <Text style={styles.searchText}>Search</Text>
          <TextInput
            style={styles.searchTextBox}
            value={search}
            onChangeText={val => updateList(val)}
          />
          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={pageData}
              extraData={pageData}
              renderItem={({item, index}) => (
                <ListCard key={index} data={item} />
              )}
              onEndReached={() => onEndReached()}
              onEndReachedThreshold={0.5}
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

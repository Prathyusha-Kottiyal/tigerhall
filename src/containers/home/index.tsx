import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../theme/colors';
import strings from '../../theme/strings';

import {useQuery} from '@apollo/client';
import {CONTENT_CARD_QUERY} from '../../gql/queries';

import ListCard from '../../components/ListCard/ListCard';

const Home = () => {
  const [search, setSearch] = React.useState<string>('');
  const {data, fetchMore, loading} = useQuery(CONTENT_CARD_QUERY, {
    variables: {
      offset: 1,
      keywords: '',
    },
  });

  const [podCasts, setPodCasts] = React.useState<any>();
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [appLoader, setAppLoader] = React.useState<boolean>(false);
  const [lazyLoad, setLazyLoad] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (data) {
      setPodCasts(data.contentCards?.edges);
      setTotalCount(data.contentCards.meta.total);
      setAppLoader(loading);
    }
  }, [data, loading]);

  const onEndReached = () => {
    if (totalCount > podCasts.length) {
      setLazyLoad(true);
      fetchMore({
        variables: {
          offset: podCasts.length,
          keywords: '',
        },
      })
        .then(fetchMoreResult => {
          setLazyLoad(false);
          setPodCasts([
            ...podCasts,
            ...fetchMoreResult.data.contentCards?.edges,
          ]);
          setTotalCount(fetchMoreResult.data.contentCards.meta.total);
        })
        .catch(() => {
          setLazyLoad(false);
        });
    }
  };

  const updateList = (val: string) => {
    setSearch(val);
    setAppLoader(true);
    fetchMore({
      variables: {
        offset: 1,
        keywords: val,
      },
    })
      .then(fetchMoreResult => {
        setAppLoader(false);
        setPodCasts(fetchMoreResult.data.contentCards?.edges);
        setTotalCount(fetchMoreResult.data.contentCards.meta.total);
      })
      .catch(() => {
        setAppLoader(false);
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View>
          <Text style={styles.searchText}>{strings.home.search}</Text>
          <TextInput
            placeholder={strings.home.placeholder_search}
            style={styles.searchTextBox}
            placeholderTextColor={Colors.Grey}
            value={search}
            onChangeText={val => updateList(val)}
          />
        </View>
        {!!appLoader && (
          <ActivityIndicator
            size="large"
            color={Colors.TigerhallOrange}
            style={styles.loader}
          />
        )}
        {!appLoader && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={podCasts}
            extraData={podCasts}
            renderItem={({item, index}) => <ListCard key={index} data={item} />}
            onEndReached={() => onEndReached()}
            onEndReachedThreshold={0.5}
            ListEmptyComponent={() => <Text style={styles.emptyString}>{strings.home.no_data}</Text>}
          />
        )}
        {lazyLoad && (
          <ActivityIndicator
            size="large"
            color={Colors.TigerhallOrange}
            style={styles.loader}
          />
        )}
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
    marginBottom: 10,
  },
  searchTextBox: {
    fontFamily: 'AvertaStd-Light',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.OffWhite,
    backgroundColor: Colors.TigerhallTeal,
    borderRadius: 5,
    padding: 8,
    marginBottom: 14,
  },
  loader: {
    marginVertical: 20,
  },
  emptyString: {
    fontFamily: 'AvertaStd-Light',
    fontWeight: '400',
    fontSize: 14,
    color: Colors.OffWhite,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;
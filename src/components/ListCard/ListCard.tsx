import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PodCast from '../../interfaces';
import Colors from '../../theme/colors';
import FastImage from 'react-native-fast-image';

const ListCard = ({data}: {data: PodCast}) => {
  const {image, name, experts, categories} = data;
  const imgURL = 'https://images.staging.tigerhall.io/';

  return (
    <View style={styles.cardContainer}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: image?.uri.replace(imgURL, `${imgURL}resize/250x`),
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.contentContainer}>
        {categories.map((category: any, index: number) => (
          <View key={index}>
            <Text style={styles.category}>{category.name.toUpperCase()}</Text>
          </View>
        ))}
        <Text style={styles.cardTitle}>{name}</Text>
        {experts.map((expert: any, index: number) => (
          <View key={index}>
            <Text
              style={
                styles.expertDetails
              }>{`${expert.firstName} ${expert.lastName}`}</Text>
            <Text style={styles.expertDetails}>{expert.title}</Text>
            <Text style={styles.companyName}>{expert.company}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    marginTop: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  cardImage: {
    height: 130,
    width: '100%',
  },
  cardTitle: {
    fontFamily: 'AvertaStd-Regular',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
    color: Colors.Black,
  },
  expertDetails: {
    fontFamily: 'AvertaStd-Regular',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.LightBlack,
  },
  companyName: {
    fontFamily: 'AvertaStd-Regular',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: Colors.TigerhallOrange,
  },
  category: {
    fontFamily: 'AvertaStd-Bold',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: Colors.TigerhallOrange,
  },
});

export default ListCard;

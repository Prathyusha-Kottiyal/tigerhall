import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PodCast from '../../interfaces';
import Colors from '../../theme/colors';

const ListCard = ({data}: {data: PodCast}) => {
  const {image, name, experts, categories} = data;
  const imgURL = 'https://images.staging.tigerhall.io/';

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={{
          uri: image?.uri.replace(imgURL, `${imgURL}resize/250x`),
        }}
      />
      <View style={styles.contentContainer}>
        {categories.map((category: any) => (
          <View>
            <Text style={styles.category}>{category.name}</Text>
          </View>
        ))}
        <Text style={styles.cardTitle}>{name}</Text>
        {experts.map((expert: any) => (
          <View>
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
    marginBottom: 20,
    overflow: 'hidden',
  },
  contentContainer: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  cardImage: {
    height: 130,
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
    fontFamily: 'AvertaStd-Regular',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 15,
    color: Colors.TigerhallOrange,
  },
});

export default ListCard;

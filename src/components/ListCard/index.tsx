import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PodCast from '../../interfaces';
import {Colors, Font} from '../../theme';
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
      <View style={[styles.contentContainer]}>
        {categories.map((category: any, index: number) => (
          <View key={index}>
            <Text style={[styles.category, styles.textGap]}>
              {category.name.toUpperCase()}
            </Text>
          </View>
        ))}
        <Text style={[styles.cardTitle, styles.textGap]}>{name}</Text>
        {experts.map((expert: any, index: number) => (
          <View key={index}>
            <Text
              style={[
                styles.expertDetails,
                styles.textGap,
              ]}>{`${expert.firstName} ${expert.lastName}`}</Text>
            <Text style={[styles.expertDetails, styles.textGap]}>
              {expert.title.toUpperCase()}
            </Text>
            <Text style={[styles.expertDetails, styles.companyName]}>
              {expert.company}
            </Text>
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
    padding: 12,
  },
  cardImage: {
    height: 130,
    width: '100%',
  },
  cardTitle: {
    fontFamily: Font.type.AvertaRegular,
    fontSize: Font.size.fontxl,
    fontWeight: '700',
    lineHeight: 22,
    color: Colors.Black,
  },
  expertDetails: {
    fontFamily: Font.type.AvertaRegular,
    fontSize: Font.size.fontm,
    fontWeight: '600',
    lineHeight: 17,
    color: Colors.LightBlack,
  },
  companyName: {
    color: Colors.TigerhallOrange,
  },
  category: {
    fontFamily: Font.type.AvertaBold,
    fontWeight: '700',
    fontSize: Font.size.fonts,
    lineHeight: 15,
    color: Colors.TigerhallOrange,
  },
  textGap: {
    marginBottom: 4,
  },
});

export default ListCard;

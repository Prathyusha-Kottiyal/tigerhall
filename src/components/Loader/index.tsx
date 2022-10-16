import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const Loader = () => {
  return (
    <ActivityIndicator
      size="large"
      color={Colors.TigerhallOrange}
      style={styles.loader}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 20,
  },
});

export default Loader;

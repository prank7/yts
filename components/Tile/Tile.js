import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const Tile = () => (
  <View style={styles.tile}>
    <Image
      style={styles.tileImage}
      source={require('../../images/movie.jpg')} />
    <Text style={styles.tileText}>Gifted (2017)</Text>
  </View>
);

export default Tile;
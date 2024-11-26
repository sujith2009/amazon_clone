import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import brand1 from '../assets/images/jeans.jpeg';

const Brand = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brands of the day</Text>
      <Image source={brand1} style={styles.brandImage} />
    </View>
  );
};

export default Brand;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '',
    color: 'black',
  },
  brandImage: {
    width: 180,
    height: 100,
  },
});

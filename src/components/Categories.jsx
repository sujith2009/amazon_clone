import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Collection} from '../data/Collection';

const Categories = () => {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}>
        {Collection.map((item, index) => (
          <View key={index} style={styles.catogries}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 1,
  },
  img: {
    width: 50,
    height: 100,
  },
  text: {
    fontFamily: 'sans-serif',
    color: '#2c4341',
    fontWeight: '700',
    fontSize: 10,
  },
  catogries: {
    paddingHorizontal: 7,
    alignItems: 'center',
  },
});

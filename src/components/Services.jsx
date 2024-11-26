import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import Ser1 from '../assets/services/ser1.png';
import Ser2 from '../assets/services/gpay.jpg';
import Ser3 from '../assets/services/scanner.jpg';
import Ser4 from '../assets/services/bill.jpg';
import {RecentSearch} from '../data/RecentSearch';
const Services = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 20}}
        style={styles.container}>
        <View style={styles.servicesContainer}>
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image source={Ser1} style={styles.img} />
              <Text style={styles.title}>Amazon Pay</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image source={Ser2} style={styles.img} />
              <Text style={styles.title}>Google Pay</Text>
            </View>
          </View>
          {/*----*/}
          <View style={styles.row}>
            <View style={styles.innerContainer}>
              <Image source={Ser3} style={styles.img} />
              <Text style={styles.title}>Scanner OR</Text>
            </View>
            <View style={styles.innerContainer}>
              <Image source={Ser4} style={styles.img} />
              <Text style={styles.title}>Pay Bils</Text>
            </View>
          </View>
        </View>
        {/*----*/}
        {RecentSearch.map((item, index) => (
          <View style={styles.outerContainer} key={index}>
            <Text style={styles.recentSearch}>{item.title}</Text>
            <Image source={item.image} style={styles.sericeImage} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  servicesContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  row: {
    flexDirection: 'row',
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 10,
    color: 'black',
  },
  sericeImage: {
    width: '100%',
    height: 128,
  },
  outerContainer: {
    backgroundColor: '#fff',
    marginLeft: 5,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 138,
  },
  recentSearch: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'sans-serif',
    marginBottom: 5,
  },
});

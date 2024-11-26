import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import deal1 from '../assets/deals/deal1.jpg';

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={deal1} style={styles.imgStyle} />
      {/*---bottom section---*/}
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.dealBtn}>
            <Text style={styles.offTitle}>18% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.originalPrice}>₹ 250.00</Text>
          <Text style={styles.mrp}>M.R.P</Text>
          <Text style={styles.offPrice}>₹ 150.00</Text>
        </View>
        <Text style={styles.productTitle}>
          Nykaa Fce sh Gente Skin Cleaner for all skin type
        </Text>
        <Text style={styles.seeAll}>See All deals</Text>
      </View>
    </View>
  );
};

export default Deals;
const styles = StyleSheet.create({
  container: {
    marginTop: 17,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  imgStyle: {
    width: '100%',
    height: 260,
    marginVertical: 10,
  },
  bottomSection: {
    paddingHorizontal: 10,
    padding: 2,
    paddingLeft: 20,
  },
  dealBtn: {
    backgroundColor: '#be0201',
    width: 65,
    padding: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  offTitle: {
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  deal: {
    color: '#be0201',
    fontWeight: 'bold',
    marginLeft: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    color: 'black',
    fontSize: 19,
    fontWeight: '700',
    marginVertical: 5,
    textDecorationLine: 'line-through',
  },
  mrp: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  offPrice: {},
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productTitle: {
    color: '#3C3D37',
  },
  seeAll: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 10,
  },
});
